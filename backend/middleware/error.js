const ErrorHander = require("../utils/errorhander");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "internal server error";

  res.status(err.statusCode).json({
    success: false,
    // error: err,
    
    message : err.message,
  });
};
