const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

// for authenticated user
exports.isAuthenticatedUser = catchAsyncErrors(async(req, res, next) => {
    const {token} = req.cookies;

    // if user is not logged in then
    if(!token) {
        return next(new ErrorHander ("Please Login to access the resource"));

    }


    // if user is logged in then decode its token and then check it after it make him to access the products

    const decodeData = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decodeData.id);
    next();
});


// for admin
// after authentication user admin will be selected
// only admin to access the selected data... like edit, delete, or update
exports.authorizeRoles = (...roles) =>{
    return (req, res, next) => {
        if(!roles.includes(req.user.role)){
           return next( new ErrorHander (`Role: ${req.user.role} is not allowed to access this resource`, 403)
           )}


        next();
    };
}

