const ErrorHandler = require("../utils/errorhander");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "internal server error";

// Wrong MongoDb Id Error
if(err.name === "CastError") {
  const message = `Resource not found. Invalid Id: ${err.path}`;
  err = new ErrorHandler(message, 400);
}

  res.status(err.statusCode).json({
    success: false,
    // error: err,
    
    message : err.message,
  });
};
