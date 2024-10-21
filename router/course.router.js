import express from "express";
import multer from "multer";
// import fs from "fs";
import {
  addCourse,
  deleteCourse,
  findCourseByName,
  readCourse,
  updateCourse,
} from "../controller/course.controllers.js";

const courseRouter = express.Router();

// file upload
const storage = multer.diskStorage({
  destination: "./uploads",
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now() + file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 10000000 },
}).fields([
  { name: "courseTutorIcon", maxCount: 1 },
  { name: "courseThumbnail", maxCount: 1 },
]);

// Get all courses
courseRouter.get("/", readCourse);

// Add new course (with file upload)
courseRouter.post("/", upload, addCourse);

// update course
courseRouter.put("/:courseId", updateCourse);

// Delete course by courseId
courseRouter.delete("/:courseId", deleteCourse);

// Find course by courseName
courseRouter.get("/:courseName", findCourseByName);

export default courseRouter;
