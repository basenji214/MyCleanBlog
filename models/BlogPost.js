
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlogPostSchema = new Schema({
  title: String,
  summary: String,
  body: String,
  comment: String,
  imageId: String,
  datePosted: { type: Date, default: Date.now }
});

const BlogPost = mongoose.model("BlogPost", BlogPostSchema);
module.exports = BlogPost;
