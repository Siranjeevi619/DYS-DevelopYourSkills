const express = require("express");
const app = express.Router();
const courseController = require("../controllers/course.controller");

app.post("/add", courseController.createCourse);
app.get("/all-course", courseController.getAllCourses);
app.get("/:id", courseController.getCourseById);
app.put("/:id", courseController.updateCourse);
app.delete("/:id", courseController.deleteCourse);

module.exports = app;
