const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");
const middleware = require("../middlewares/auth.middleware");
router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/me", middleware, authController.meApi);
router.get("/isuser", middleware, authController.isUser);

module.exports = router;
