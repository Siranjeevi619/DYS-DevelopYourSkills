const User = require("../models/auth.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Response = require("../utils/commonResponse");
const AuthDto = require("../utils/authDto");

const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) return Response.error(res, "Email already exists", 400);

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    return Response.created(res, "User registered successfully", newUser);
  } catch (err) {
    return Response.error(res, "Registration failed", 500, err.message);
  }
};

const meApi = async (req, res) => {
  try {
    const userId = req.user.id;

    const user = await User.findById(userId);

    if (!user) {
      return Response.error(res, "User not found", 404);
    }

    return Response.success(
      res,
      "User fetched successfully",
      AuthDto.authResponse(user.id, user.name, user.email, user.role)
    );
  } catch (err) {
    return Response.error(res, "Internal server error", 500, err.message);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return Response.error(res, "Invalid email or password", 400);

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return Response.error(res, "Invalid email or password", 400);

    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES }
    );

    return Response.success(res, "Login successful", {
      token,
      user: {
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    return Response.error(res, "Login failed", 500, err.message);
  }
};

module.exports = {
  register,
  login,
  meApi,
};
