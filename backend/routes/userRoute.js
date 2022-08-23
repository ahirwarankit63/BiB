const express = require("express");
const { registerUser, loginUser, logout, forgotPassword } = require("../controllers/userController");
const router = express.Router();


// user register
router.route("/register").post(registerUser);

// login user
router.route("/login").post(loginUser);

// forgot Password
router.route("/password/forgot").post(forgotPassword)

// logout user
router.route("/logout").get(logout);



module.exports = router;