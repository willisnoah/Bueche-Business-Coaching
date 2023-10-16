import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($email: String!, $password: String!) {
    addUser(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_APPT = gql`
mutation addAppt($user: String!, $email: String!, $time: String!) {
  addAppt(user: user, email: email, time: time) {
    token
    user {
      _id
    }
  }
}
`;
