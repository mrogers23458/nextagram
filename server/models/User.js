import { Schema, model } from "mongoose";
import Post from "./Post.js";
const userSchema = new Schema({
  email: String,
  fullName: String,
  userName: String,
  password: String,
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: Post,
    },
  ],
});

const User = model("User", userSchema);

export default User;
