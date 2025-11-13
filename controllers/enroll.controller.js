const Enrollment = require("../models/enroll.model");
const Response = require("../utils/commonResponse");

async function enrollCourse(req, res) {
  try {
    const { courseId } = req.body;
    const userId = req.user.id;

    const existing = await Enrollment.findOne({ userId, courseId });
    if (existing) return Response.error(res, "Already enrolled", 400);

    const newEnroll = await Enrollment.create({ userId, courseId });

    return Response.created(res, "Enrolled successfully", newEnroll);
  } catch (err) {
    return Response.error(res, "Enrollment failed", 500, err.message);
  }
}

async function getAllEnrollments(req, res) {
  try {
    const all = await Enrollment.find();
    return Response.success(res, "All enrollments fetched", all);
  } catch (err) {
    return Response.error(res, "Failed to fetch enrollments", 500, err.message);
  }
}

async function getEnrollmentById(req, res) {
  try {
    const id = req.params.id;
    const enroll = await Enrollment.findById(id);

    if (!enroll) return Response.error(res, "Enrollment not found", 404);

    return Response.success(res, "Enrollment fetched", enroll);
  } catch (err) {
    return Response.error(res, "Failed to fetch", 500, err.message);
  }
}

async function updateEnrollment(req, res) {
  try {
    const id = req.params.id;
    const { status } = req.body;

    const updated = await Enrollment.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!updated) return Response.error(res, "Enrollment not found", 404);

    return Response.success(res, "Enrollment updated", updated);
  } catch (err) {
    return Response.error(res, "Update failed", 500, err.message);
  }
}

async function deleteEnrollment(req, res) {
  try {
    const id = req.params.id;

    const deleted = await Enrollment.findByIdAndDelete(id);

    if (!deleted) return Response.error(res, "Enrollment not found", 404);

    return Response.success(res, "Enrollment deleted successfully");
  } catch (err) {
    return Response.error(res, "Delete failed", 500, err.message);
  }
}

module.exports = {
  enrollCourse,
  getAllEnrollments,
  getEnrollmentById,
  updateEnrollment,
  deleteEnrollment,
};
