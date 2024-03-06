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
