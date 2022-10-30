import Post from "../models/Post.js";
import User from "../models/User.js";

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },

    user: async (parent, { email }) => {
      return User.findOne({ email });
    },

    posts: async () => {
      return Post.find();
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

    createUser: async (parent, { userName, fullName, email, password }) => {
      console.log({ userName, fullName, email, password });
      const user = await User.create({
        userName,
        fullName,
        email,
        password,
      });
      if (user) {
        return user;
      } else {
        throw new Error("user cannot be created");
      }
    },

    createPost: async (parent, { title, content, author }) => {
      const user = await User.findOne({ userName: author });
      if (user) {
        const post = await Post.create({ title, content, author });
        await User.findOneAndUpdate(
          { userName: author },
          { $addToSet: { posts: post._id } }
        );
        return post;
      } else {
        throw new Error("user with that userName not found");
      }
    },
  },
};

export default resolvers;
