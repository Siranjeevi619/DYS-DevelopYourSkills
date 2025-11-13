const Course = require("../models/course.model");
const Response = require("../utils/CommonResponse");

exports.createCourse = async (req, res) => {
  try {
    const course = await Course.create(req.body);
    return Response.created(res, "Course created successfully", course);
  } catch (err) {
    return Response.error(res, "Failed to create course", 500, err.message);
  }
};

exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    return Response.success(res, "Courses fetched successfully", courses);
  } catch (err) {
    return Response.error(res, "Failed to fetch courses", 500, err.message);
  }
};

exports.getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) return Response.notFound(res, "Course not found");

    return Response.success(res, "Course fetched", course);
  } catch (err) {
    return Response.error(res, "Error fetching course", 500, err.message);
  }
};

exports.updateCourse = async (req, res) => {
  try {
    const updated = await Course.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!updated) return Response.notFound(res, "Course not found");

    return Response.success(res, "Course updated", updated);
  } catch (err) {
    return Response.error(res, "Error updating course", 500, err.message);
  }
};

exports.deleteCourse = async (req, res) => {
  try {
    const deleted = await Course.findByIdAndDelete(req.params.id);

    if (!deleted) return Response.notFound(res, "Course not found");

    return Response.success(res, "Course deleted");
  } catch (err) {
    return Response.error(res, "Error deleting course", 500, err.message);
  }
};
