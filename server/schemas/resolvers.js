import User from "../models/User.js";

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },

    user: async (parent, { email }) => {
      return User.findOne({ email });
    },
  },
};

export default resolvers;
