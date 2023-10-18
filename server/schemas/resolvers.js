const { AuthenticationError } = require('apollo-server-express');
const { User, Appointment } = require('../models'); // Make sure to import your User and Appointment models
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select('-__v -password');
        return userData;
      }
      throw new AuthenticationError('Not logged in');
    },
    getAppointments: async () => {
      // Implement logic to fetch appointments from the database
      const appointments = await Appointment.find();
      return appointments;
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }
      const token = signToken(user);
      return { token, user };
    },
    addAppointment: async (parent, { date }, context) => {
      if (!context.user) {
        throw new AuthenticationError('You must be logged in to add an appointment');
      }
      const appointment = await Appointment.create({ user: context.user._id, date });
      return appointment;
    },
  },
};

module.exports = resolvers;