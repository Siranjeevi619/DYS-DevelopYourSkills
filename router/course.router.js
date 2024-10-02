import express, { Route } from "express";
import { addCourse, readCourse } from "../controller/course.controllers.js";
const courseRouter = express.Router();

courseRouter.get("/", readCourse);

courseRouter.post("/", addCourse);

export default courseRouter;
