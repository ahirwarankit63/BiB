const mongoose = require("mongoose");
const validator = require("validator");
// const { validate } = require("./productModel");
const bcrypt = require("bcryptjs");


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    requiredd: [true, "Please Enter Your Name"],
    maxLength: [30, "Name cannot exceed 30 character"],
    minLength: [3, "Name length should be greater than 3 Characters"],
  },

  email: {
    type: String,
    required: [true, "Please Enter Your Email"],
    unique: true,
    validate: [validator.isEmail, "Please Enter Valid Email"], //to validate the email wether it is valid or not i.e. @gamil.com format or not
  },

  password: {
    type: String,
    required: [true, "Please enter your password"],
    minLength: [6, "Password should be greater than 6 characters"],
    select: false , // not to show password with admin
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
    type: String,
    default: "user",
  },

  resetPasswordToken: String,
  resetPasswordExpire: Date,
});



// hashing the password

userSchema.pre("save", async function(next) {
  
  // if password is not modified then save it as pervious hashed password
  if(!this.isModified("password")) {
    next ();

  }
  this.password = await bcrypt.hash(this.password, 8)
})

module.exports = mongoose.model("user", userSchema);
