import { gql } from "@apollo/client";

export const GET_USER_BY_ID = gql`
  query User_findById($id: MongoID!) {
    users_findById(_id: $id) {
      email
      firstName
      lastName
      class
      graduationYear
      university
      _id
      updatedAt
      createdAt
    }
  }
`;
