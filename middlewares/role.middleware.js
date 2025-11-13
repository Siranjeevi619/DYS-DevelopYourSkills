const Response = require("../utils/CommonResponse");

const authorizeRole = (roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return Response.error(
        res,
        "Access Denied: You don't have permission",
        403
      );
    }
    next();
  };
};

module.exports = authorizeRole;
