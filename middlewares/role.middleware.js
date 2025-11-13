const Response = require("../utils/commonResponse");

const authorizeRole = (roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return Response.error(res, "Access denied", 403);
    }
    next();
  };
};

module.exports = authorizeRole;
