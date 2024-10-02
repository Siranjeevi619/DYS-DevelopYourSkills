import mongoose, { Model, Schema } from "mongoose";
import { v4 as uuidv4 } from "uuid";
// courseId, courseName, courseDescripition, courseTutor, courseLanguage, courseDuration, courseTags, courseTutorIcons, courseThumbnail,
//courseThumbnail ,courseDocs , courseOutcome, coursePlayList,courseCertify

const Playlist = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 255,
  },
  videoUrls: [
    {
      type: String,
      required: true,
      match: /https?:\/\/(www\.)?youtube\.com\/watch\?v=[\w-]+/,
    },
  ],
});

const courseSchema = new mongoose.Schema({
  courseId: {
    type: String,
    require: true,
    unique: true,
    default: uuidv4,
  },
  courseName: {
    require: true,
    unique: true,
    type: String,
    minlength: 1,
    maxlength: 255,
  },
  courseDescription: {
    require: true,
    unique: true,
    type: String,
    minlength: 10,
    // maxlength: 255,
  },
  courseTutor: {
    require: true,
    type: String,
    minlength: 1,
    maxlength: 255,
  },
  courseLanguage: {
    require: true,
    type: String,
    minlength: 3,
    maxlength: 30,
  },
  courseDuration: {
    require: true,
    type: Number,
  },
  courseTags: {
    type: [String],
    validate: {
      validator: function (v) {
        return v.length <= 20;
      },
      message: "you have maximum of 20 promo tags",
    },
  },
  courseTutorIcon: {
    type: String,
    require: true,
  },
  courseThumbnail: {
    type: String,
    require: true,
  },
  courseDocs: [{ type: String, require: true }],
  courseOutcome: [
    {
      type: String,
      require: true,
    },
  ],
  courseCertify: [
    {
      type: String,
      require: true,
    },
  ],
  coursePlayList: [Playlist],
});

const courseModel = mongoose.model("course", courseSchema);
export default courseModel;
