const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken")

// Register User

exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  const { name, email, contact, password } = req.body;

  const user = await User.create({
    name,
    email,
    contact,
    password,
    avatar: {
      public_id: "this is a sample id",
      url: "profilepicurl",
    },
  });

  const token = user.getJWTToken();

  res.status(201).json({
    success: true,
    token,
    // user,
  });
});
