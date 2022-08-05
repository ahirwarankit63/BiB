const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/userModel");

// Register User

exports.registerUser = catchAsyncErrors(async (req, res, next) =>{

    const {name, email, password} = req.body;

    const user = await User.create({
        name,
        email, 
        password, 
        avatar : {
            public_id : "this is a sample id",
            url : "profilepicurl",
        }
    });
    res.status(201).json({
        success : true,
        user,
    });
}) 