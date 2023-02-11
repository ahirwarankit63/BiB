const express = require("express");
const { registerUser, loginUser, logout, forgotPassword, resetPassword, getUserDetails, updatePassword, updateProfile } = require("../controllers/userController");
const router = express.Router();
const { isAuthenticatedUser, autorizeRoles} = require("../middleware/auth");

// user register
router.route("/register").post(registerUser);

// login user
router.route("/login").post(loginUser);

// forgot Password
router.route("/password/forgot").post(forgotPassword);

// Reset Password
router.route("/password/reset/:token").put(resetPassword);

// logout user
router.route("/logout").get(logout);

// get user details
router.route("/me").get(isAuthenticatedUser,getUserDetails);

// update user password
router.route("/password/update").put(isAuthenticatedUser, updatePassword)

// update user profile
router.route("/me/update").put(isAuthenticatedUser, updateProfile)


module.exports = router;