import { Schema, model } from "mongoose";

const postSchema = new Schema({
  id: String,
  title: String,
  content: String,
  author: String,
});

const Post = model("Post", postSchema);

export default Post;
