import { cookies } from "next/headers";

import { GET_USER_BY_ID } from "@/utils/graphql";
import { logout } from "@/utils/logout";
import useQuery from "@/utils/useQuery";

import type { IUser, TRecord } from "./types";

const useUser = async () => {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  const id = cookieStore.get("user-id")?.value;

  const { data, error, loading } = await useQuery<
    TRecord<"users_findById", IUser>
  >(GET_USER_BY_ID, { skip: !id || !token, variables: { id } });

  const user = { ...data?.users_findById, token };

  if (!id) {
    logout();

    return undefined;
  }

  if (!error && !loading) {
    return data ? user : undefined;
  }

  return undefined;
};

export default useUser;
