const Product = require("../models/productModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apiFeatures");



// create product [acc. by {Admin}---------use (get) in postman]

exports.createProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(201).json({
    // where 200 is status code
    success: true,
    product,
  });
});

// Get single product details
exports.getProductDetails = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  // if product is not found then show the output as product not found
  if (!product) {
    return next(new ErrorHander("product not found", 404));
  }

  // If product is found then show all the details
  res.status(200).json({
    //where 200 is status code
    success: true,
    product,
  });
});

// Get All product [acc. by {Admin}---------use (get) in postman]

exports.getAllProducts = catchAsyncErrors(async (req, res) => {

  const apiFeature = new ApiFeatures(Product.find(), req.query).search().filter();
  const products = await apiFeature.query;
  res.status(200).json({
    success: true,
    products,
  });
});

// update products  [acc. by {Admin}------use (put) in postman]

exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
  let product = Product.findById(req.params.id);

  // -->if product is not found then simply throw output "product not found"
  if (!product) {
    return next(new ErrorHander("product not found", 404));
  }

  // -->if product is found then update it
  (product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndMOdify: false,
  })),
    res.status(200).json({
      //where 200 is status code
      success: true,
      product,
    });
});

// Delete Product

exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHander("product not found", 404));
  }

  await product.remove();

  res.status(200).json({
    //where 200  is status code
    success: true,
    message: "Product Deleted Successfully",
  });
});
