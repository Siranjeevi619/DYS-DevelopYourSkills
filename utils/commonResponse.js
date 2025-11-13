class CommonResponse {
  static success(res, message, data = null, status = 200) {
    return res.status(status).json({
      success: true,
      message,
      data,
    });
  }

  static created(res, message, data = null) {
    return res.status(201).json({
      success: true,
      message,
      data,
    });
  }

  static error(res, message, status = 500, details = null) {
    return res.status(status).json({
      success: false,
      message,
      error: details,
    });
  }

  static notFound(res, message = "Resource not found") {
    return res.status(404).json({
      success: false,
      message,
    });
  }

  static badRequest(res, message = "Bad request") {
    return res.status(400).json({
      success: false,
      message,
    });
  }

  static unauthorized(res, message = "Unauthorized access") {
    return res.status(401).json({
      success: false,
      message,
    });
  }
}

module.exports = CommonResponse;
