const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    email: String!
  }

  type Appointment {
    _id: ID!
    date: String!
    user: User
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    getAppointments: Appointment
  }

  type Mutation {
    addUser(email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addAppointment(date: String!): Appointment
  }
`;

module.exports = typeDefs;