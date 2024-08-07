const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail")
const crypto = require("crypto");

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

// Logout User

exports.logout = catchAsyncErrors(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged Out!!",
  });
});


// Forgot Password
exports.forgotPassword = catchAsyncErrors(async(req, res, next) => {
  const user = await User.findOne({email: req.body.email});

  if(!user){
    return next(new ErrorHander("User not found", 404));
  }
    // get reset password token
    const resetToken = user.getResetPasswordToken();
    await user.save({validateBeforeSave : false});

    // the below url is in this format --->
    //`http://localhost/api/v1/password/reset/${resetToken}`    
    const resetPasswordUrl = `${req.protocol}://${req.get("host")}/api/v1/password/reset/${resetToken}`;
       

    // message for email
    const message = `Your password reset token is -\n \n ${resetPasswordUrl} \n\n if you have not requested this then, please ignore it!!`;

    try {
      await sendEmail({

        // sent to user mail
        email : user.email,
        // subject of the mail sent to user for password recovery
        subject : `Book I Book Password Recovery`,
        message,
      });

      res.status(200).json({
        // will be shown in screen after recovery mail sent to user
        success : true,
        message : `Email sent to ${user.email} successfully`,
      })

    } catch(error){
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;

      await user.save({ validateBeforeSave : false});
      return next(new ErrorHander(error.message, 500));
    }
});


// Reset Password
exports.resetPassword = catchAsyncErrors(async(req, res, next) => {

  //creating token hash
  const resetPasswordToken = crypto
  .createHash("sha256")
  .update(req.params.token)
  .digest("hex")

  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire : { $gt: Date.now()}
  })

if(!user) {
  return next (new ErrorHander ("Reset Password Token is invalid or has been expired", 400));

}

if(req.body.password !== req.body.confirmPassword){
  return next (new ErrorHander ("Password does not match", 400));
}

user.password = req.body.password;


user.resetPasswordToken = undefined;
user.resetPasswordExpire = undefined;


await user.save();


sendToken(user, 200, res);

})


// Get User Details
exports.getUserDetails = catchAsyncErrors(async(req, res,next) =>{
const user = await User.findById(req.user.id);

res.status(200).json({
  success : true,
  user,
});
});

// update user password 
exports.updatePassword = catchAsyncErrors(async ( req, res, next) => {
  const user = await User.findById(req.user.id).select("+password");

  const isPasswordMatched = await user.comparePassword(req.body.oldPassword);

  if (!isPasswordMatched) {
    return next(new ErrorHander(
      "Old passoword is incorrect", 400
    ));
  }
  if(req.body.newPassword !==req.body.confirmPassword){
    return next (new ErrorHander("password does not match"), 400);
  }

  user.password = req.body.newPassword

  await user.save()

 sendToken(user,200, res)
});


// update user profile 
exports.updateProfile =  catchAsyncErrors(async ( req, res, next) => {
  const newUserData = {
    name : req.body.name,
    email : req.body.email,
    contact : req.body.contact,
  };

  const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
    new : true,
    runValidators : true,
    useFindAndModify : false,

  }); 

  res.status(200).json({
    success:true,
  })
});


// Get All Users for Admin  

exports.getAllUsers = catchAsyncErrors(async(req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    success : true,
    users,
  });
});


//  get a single user for admin

exports.getSingleUser = catchAsyncErrors(async(req, res, next) => {
  const user = await User.findById(req.params.id);

  if(!user){
    return next(
      new ErrorHander(`user does not exist with id: ${req.params.id}`)
    );
  }

  res.status(200).json({
    success : true,
    user,
  });
});



// update user role ----adm in
exports.updateUserRole =  catchAsyncErrors(async ( req, res, next) => {
  const newUserData = {
    name : req.body.name,
    email : req.body.email,
    contact : req.body.contact,
    role: req.body.role,
  };

  const user = await User.findByIdAndUpdate(req.params.id, newUserData, {
    new : true,
    runValidators : true,
    useFindAndModify : false,

  }); 

  res.status(200).json({
    success:true,
  })
}); 


// delete user
exports.deleteUser = catchAsyncErrors(async(req, res, next) => {
  const user = await User.findById(req.params.id);
// we will remove cloudinary later


  if(!user){
    return next(
      new ErrorHander(`user does not exist with id: ${req.params.id}`)
    );
  }

  await user.remove();


  res.status(200).json({
    success : true,
    message : "User Deleted Successfuly",
    user,
  }); 
});
