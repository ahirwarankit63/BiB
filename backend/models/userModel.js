const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: string,
    require: [true, "Please Enter Your Name"],
    maxLength: [30, "Name cannot exceed 30 character"],
    minLength: [3, "Name length should be greater than 3 Characters"],
  },

  email: {
    type: string,
    require: [true, "Please Enter Your Email"],
    unique: true,
    validator: [validate.isEmail, "Please Enter Valid Email"], //to validate the email wether it is valid or not i.e. @gamil.com format or not
  },

  password: {
    type: string,
    require: [true, "Please enter your password"],
    minLength: [6, "Password should be greater than 6 characters"],
    select: flase, // not to show password with admin
  },

  avatar: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },

  role: {
    type: string,
    default: "user",
  },

  resetPasswordToken: string,
  resetPasswordExpire: Date,
});

module.exports = userSchema("user", UserSchema);
