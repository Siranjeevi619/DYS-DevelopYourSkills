const express = require("express");
const router = express.Router();
const controller = require("../controllers/enroll.controller");
const auth = require("../middlewares/auth.middleware");
const authorize = require("../middlewares/role.middleware");

router.post("/", auth, controller.enrollCourse);

router.get("/me", auth, controller.getAllEnrollments);

router.get("/", auth, authorize(["ADMIN"]), controller.getAllEnrollments);

router.get("/:id", auth, controller.getEnrollmentById);

router.put("/:id", auth, authorize(["ADMIN"]), controller.updateEnrollment);

router.delete("/:id", auth, authorize(["ADMIN"]), controller.deleteEnrollment);

module.exports = router;
