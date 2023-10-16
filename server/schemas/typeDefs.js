const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    email: String!
  }
  type Appt {
    _id: ID!
    time: String!
    user: [User]
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    me: User
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(email: String!, password: String!): Auth
    addAppt(user: String!, email: String!, time: String!): Auth

  }
  `;
module.exports = typeDefs;