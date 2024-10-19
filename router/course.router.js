import express from "express";
import multer from "multer";
import fs from "fs";
import {
  addCourse,
  deleteCourse,
  findCourseByName,
  readCourse,
  updateCourse,
} from "../controller/course.controllers.js";

const courseRouter = express.Router();

// Ensure 'uploads' directory exists
const dir = "./uploads";
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

// Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads"); // Ensure this folder exists
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // Unique filename
  },
});

// Multer middleware for handling file uploads
const upload = multer({
  storage: storage,
  limits: { fileSize: 10000000 }, // Limit file size to 10MB
}).fields([
  { name: "courseTutorIcon", maxCount: 1 }, // Handle single icon
  { name: "courseThumbnail", maxCount: 1 }, // Handle single thumbnail
]);

// Routes

// Get all courses
courseRouter.get("/", readCourse);

// Add new course (with file upload)
courseRouter.post("/", upload, addCourse);

// Update existing course by courseId
courseRouter.put("/:courseId", updateCourse);

// Delete course by courseId
courseRouter.delete("/:courseId", deleteCourse);

// Find course by courseName
courseRouter.get("/:courseName", findCourseByName);

export default courseRouter;
