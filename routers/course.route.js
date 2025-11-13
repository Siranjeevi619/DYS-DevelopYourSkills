const express = require("express");
const app = express.Router();
const courseController = require("../controllers/course.controller");
const auth = require("../middlewares/auth.middleware");
const authorize = require("../middlewares/role.middleware");

app.post("/add", auth, authorize(["ADMIN"]), courseController.createCourse);
app.get("/all-course", auth, courseController.getAllCourses);
app.get("/:id", auth, courseController.getCourseById);
app.put("/:id", auth, courseController.updateCourse);
app.delete("/:id", auth, courseController.deleteCourse);

module.exports = app;
