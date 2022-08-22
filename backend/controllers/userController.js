const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const sendToken = require("../utils/jwtToken");

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

  sendToken(user, 201, res);
});

// Login User
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;

  // checking if user has given password and email both

  if (!email || !password) {
    return next(new ErrorHander("Please Enter Email & Passowrd", 400));
  }
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorHander("Invalid email or Password"));
  }

  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new ErrorHander("Invalid email or Password", 401));
  }

 sendToken(user, 200, res);
});
