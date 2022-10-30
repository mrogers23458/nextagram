import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser(
    $email: String
    $fullName: String
    $userName: String
    $password: String
  ) {
    createUser(
      email: $email
      fullName: $fullName
      userName: $userName
      password: $password
    ) {
      email
      userName
      id
    }
  }
`;
