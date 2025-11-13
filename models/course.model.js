const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    author: String,
    category: String,
    authorLogo: String,
    thumbnailUrl: String,

    videoUrls: [String],
    videoTitle: [String],
    documents: [String],
    certifications: [String],
    tags: [String],
    roadmap: [String],
  },
  { timestamps: true }
); // creates createdAt, updatedAt automatically

module.exports = mongoose.model("Course", courseSchema);
