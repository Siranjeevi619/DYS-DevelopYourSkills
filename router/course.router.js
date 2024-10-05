import express, { Route } from "express";
import {
  addCourse,
  deleteCourse,
  findCourseByName,
  readCourse,
  updateCourse,
} from "../controller/course.controllers.js";
const courseRouter = express.Router();

courseRouter.get("/", readCourse);

courseRouter.post("/", addCourse);

courseRouter.put("/:courseId", updateCourse);

courseRouter.delete("/:courseId", deleteCourse);

courseRouter.get("/:courseName", findCourseByName);

export default courseRouter;
