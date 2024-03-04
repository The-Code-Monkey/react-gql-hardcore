export interface IPaginationInfo {
  currentPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  itemCount: number;
  pageCount: number;
  perPage: number;
}

export type TPagination<Key extends string, Type extends object> = {
  [key in Key]: {
    count: number;
    items: Type[];
    pageInfo: IPaginationInfo;
  };
};

export type TRecord<Key extends string, Type extends object> = {
  [key in Key]: Type;
};

export interface IStripePrice {
  active: boolean;
  currency: string;
  id: string;
  name: string;
  nickname: string;
  product: string;
  recurring: {
    interval: string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    interval_count: number;
  };
  // eslint-disable-next-line @typescript-eslint/naming-convention
  unit_amount: number;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  unit_amount_decimal: number;
}

export interface IStripeProduct {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  default_price: string;
  id: string;
  metadata: object;
  name: string;
}

export interface IStripeCheckoutSession {
  record: {
    url: string;
  };
}

export interface IStaticPage<Type> {
  content: {
    fields: { [key: string]: Type };
  };
}

export interface IFieldImage {
  url: string;
}

export type TField = IFieldImage[] | string | undefined;

export interface IFields {
  [key: string]:
    | {
        [key: string]: IFieldImage[] | string;
      }
    | undefined;
}

export interface IStripeSubscription {
  subscription: {
    customer: string;
    id: string;
  };
}

export interface IStripeCustomer {
  customer: {
    email: string;
    id: string;
  };
}

export interface IUser {
  _id: string;
  class: string;
  createdAt: string;
  email: string;
  firstName: string;
  graduationYear: number;
  lastName: string;
  university: string;
  updatedAt: string;
}
