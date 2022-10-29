import { gql } from "apollo-server-express";

const typeDefs = gql`
  type User {
    id: ID
    email: String
    fullName: String
    userName: String
    password: String
  }

  type Query {
    users: [User]
    user(email: String): User
  }

  type Mutation {
    login(email: String, password: String): User

    createUser(
      userName: String
      fullName: String
      email: String
      password: String
    ): User
  }
`;

export default typeDefs;
