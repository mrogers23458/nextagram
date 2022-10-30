import { gql } from "@apollo/client";

export const GET_ALL_USERS = gql`
  query getUsers {
    users {
      userName
    }
  }
`;

export const GET_ALL_POSTS = gql`
  query getPosts {
    posts {
      title
      content
    }
  }
`;
