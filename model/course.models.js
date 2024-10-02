import req from "express/lib/request";
import { type } from "express/lib/response";
import { ReturnDocument } from "mongodb";
import mongoose, { Model, Schema } from "mongoose";

const courseSchema = new mongoose.Schema({
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
  coursePlayList: [
    {
      type: String,
      required: true,
      match: /https?:\/\/(www\.)?youtube\.com\/watch\?v=[\w-]+/,
    },
  ],
});
