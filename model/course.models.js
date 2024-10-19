import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const VideoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 255,
  },
  link: {
    type: String,
    required: true,
    // match: /https?:\/\/(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)[\w-]+/, // Updated regex to handle both full and shortened YouTube URLs
  },
});

const courseSchema = new mongoose.Schema({
  courseId: {
    type: String,
    required: true,
    unique: true,
    default: uuidv4,
  },
  courseName: {
    required: true,
    // unique: true,
    type: String,
    minlength: 1,
    maxlength: 255,
  },
  courseDescription: {
    required: true,
    type: String,
    minlength: 1,
  },
  courseTutor: {
    required: true,
    type: String,
    minlength: 1,
    maxlength: 255,
  },
  courseLanguage: {
    required: true,
    type: String,
    minlength: 3,
    maxlength: 30,
  },
  courseDuration: {
    required: true,
    type: Number,
  },
  courseTags: {
    type: [String],
    validate: {
      validator: function (v) {
        return v.length <= 20 && v.every((tag) => tag.length > 0);
      },
      message: "Maximum of 20 tags allowed, and tags cannot be empty.",
    },
  },
  courseTutorIcon: {
    data: Buffer,
    contentType: String,
    // required: true,
  },
  courseThumbnail: {
    data: Buffer,
    contentType: String,
    // required: true,
  },
  courseDocs: [
    {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return v.length > 0;
        },
        message: "Documents must not be empty.",
      },
    },
  ],
  courseOutcome: [
    {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return v.length > 0;
        },
        message: "Outcome must not be empty.",
      },
    },
  ],
  courseCertify: [
    {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return v.length > 0;
        },
        message: "Certify field must not be empty.",
      },
    },
  ],
  coursePlayList: [VideoSchema],
});

const courseModel = mongoose.model("Course", courseSchema);
export default courseModel;
