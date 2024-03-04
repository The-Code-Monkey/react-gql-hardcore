"use server";

import type {
  ApolloQueryResult,
  OperationVariables,
} from "@apollo/client/core/types";
import type { DocumentNode } from "graphql";

import { getClient } from "@/utils/apolloClient";

interface IRefetchFunctionType<Type> {
  (newOptions: Readonly<OperationVariables>): Promise<ApolloQueryResult<Type>>;
}

interface IOnCompletedType<Type> {
  onCompleted?: (data: Type) => void;
}

interface ITypedOperationVariables<Type>
  extends OperationVariables,
    IOnCompletedType<Type> {}

interface IUseQueryPromiseType<Type>
  extends Omit<ApolloQueryResult<Type>, "data"> {
  data: Type | undefined;
  refetch: IRefetchFunctionType<Type>;
}

const useQuery = async <Type>(
  query: DocumentNode,
  options: ITypedOperationVariables<Type | undefined> = {},
): Promise<Partial<IUseQueryPromiseType<Type | undefined>>> => {
  // this is required as this isn't technically a hook
  // because it's a server functions
  // eslint-disable-next-line @arthurgeron/react-usememo/require-usememo
  const refetch = async (
    newOptions: Readonly<ITypedOperationVariables<Type | undefined>>,
  ) => await getClient().query<Type | undefined>({ query, ...newOptions });

  if (options.skip) {
    return {
      data: undefined,
      loading: false,
      refetch,
    };
  }

  const { data, error, errors, loading } = await getClient().query<
    Type | undefined
  >({
    query,
    ...options,
  });

  if (options.onCompleted) {
    options.onCompleted(data);
  }

  return {
    data,
    error,
    errors,
    loading,
    refetch,
  };
};

export default useQuery;
