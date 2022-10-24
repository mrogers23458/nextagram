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
`;

export default typeDefs;
