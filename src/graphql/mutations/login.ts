import gql from "graphql-tag";

// Mutation for authenticating a user.
export const loginMutation = gql`
  mutation($data: LoginInput!) {
    login(data: $data) {
      access_token
      refresh_token
    }
  }
`;
