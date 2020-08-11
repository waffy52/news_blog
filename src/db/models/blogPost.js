const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Post = new Schema(
  {
    title: { type: String, required: true },
    blogPostText: { type: String, required: true },
    source: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Post', Post);
