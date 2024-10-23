const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  videoTitle: {
    type: String,
    required: true,
  },
  videoLink: {
    type: String,
    required: true,
  },
});

const CourseSchema = new mongoose.Schema({
  courseName: {
    type: String,
    required: true,
  },
  courseDescription: {
    type: String,
    required: true,
  },
  tutorName: {
    type: String,
    required: true,
  },
  courseLanguage: {
    type: String,
    required: true,
  },
  courseDuration: {
    type: Number,
    required: true,
  },
  courseTutorIcon: {
    type: String,
    required: true,
  },
  courseThumbnail: {
    type: String,
    required: true,
  },
  courseTags: [String],
  courseCertification: [String],
  courseDocuments: [String],
  courseOutcomes: [String],
  courseVideos: [videoSchema],
});

const courseModel = mongoose.model("CourseSchema", CourseSchema);
module.exports = courseModel;
