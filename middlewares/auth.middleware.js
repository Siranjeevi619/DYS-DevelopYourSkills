const jwt = require("jsonwebtoken");
const Response = require("../utils/CommonResponse");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer "))
    return Response.error(res, "Unauthorized: Token missing", 401);

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return Response.error(res, "Invalid or expired token", 401);
  }
};

module.exports = authMiddleware;
