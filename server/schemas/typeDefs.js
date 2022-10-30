import { gql } from "apollo-server-express";

const typeDefs = gql`
  type User {
    id: ID
    email: String
    fullName: String
    userName: String
    password: String
    posts: [Post]
  }

  type Post {
    id: ID
    title: String
    content: String
    author: String
  }

  type Query {
    users: [User]
    user(email: String): User
    posts: [Post]
  }

  type Mutation {
    login(email: String, password: String): User

    createUser(
      userName: String
      fullName: String
      email: String
      password: String
    ): User

    createPost(title: String, content: String, author: String): Post
  }
`;

export default typeDefs;
