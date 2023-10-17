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

export const GET_APPOINTMENTS = gql`
  query GetAppointments {
    appointments {
      id
      date
      text
    }
  }
`;

export const CREATE_APPOINTMENT = gql`
  mutation CreateAppointment($date: String!, $text: String!) {
    createAppointment(date: $date, text: $text) {
      id
      date
      text
    }
  }
`;
