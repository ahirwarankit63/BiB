const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");



const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Your Name"],
    maxLength: [30, "Name cannot exceed 30 character"],
    minLength: [3, "Name length should be greater than 3 Characters"],
  },
  


 
  contact : {
    type : Number,
    required : [true, "Please enter the mobile number"],
    
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
        select: false, // not to show password with admin
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

userSchema.pre("save", async function (next) {
  // if password is not modified then save it as pervious hashed password
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 8);
});

// JWT token
//generating the token so that user can instantly get logged in after registering
userSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    //creating the secret token
    expiresIn: process.env.JWT_EXPIRE, //logging in expiring session... ie. how long user can get logged in without any use
  });
};

module.exports = mongoose.model("User", userSchema);
