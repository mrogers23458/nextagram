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
  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (user && user?.password === password) {
        console.log("user here", user);
        return user;
      } else {
        throw new Error("passwords do not match");
      }
    },
  },
};

export default resolvers;
