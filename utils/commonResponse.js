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
}

module.exports = CommonResponse;
