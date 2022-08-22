const express = require("express");
const { registerUser, loginUser, logout } = require("../controllers/userController");
const router = express.Router();


// user register
router.route("/register").post(registerUser);

// login user
router.route("/login").post(loginUser);

// logout user
router.route("/logout").get(logout);



module.exports = router;