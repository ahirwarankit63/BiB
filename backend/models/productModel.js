const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter product name"],
  },
  description: {
    type: String,
    required: [true, "Please enter product Description"],
  },

  price: {
    type: Number,
    required: [true, "Please enter product price"],
    maxLenght: [8, "price cannot exceed 8 character"],
  },

  rating: {
    type: Number,
    default: 0,
  },

  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],

  category: {
    type: String,
    required: [true, "Please enter the product category"],
  },

  Stock: {
    type: Number,
    required: [true, " please enter te product stock"],
    maxLength: [4, "Stock cannot exceed 4 characters"],
    default: 1,
  },

  numOfReviews : {
    type : Number,
    default : 0
  },

  reviews : [ {
    name : { 
        type : String,
        required : true,

    },

    rating : {
        type : Number,
        required : true
    },

    comment : {
        type : String,
        required : true
    }
  }],

  createdAt : {
    type : Date,
    default : Date.now
  }



});

module.exports = mongoose.model("Product", productSchema)
