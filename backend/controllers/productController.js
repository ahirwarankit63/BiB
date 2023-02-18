const Product = require("../models/productModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apiFeatures");

// create product [acc. by {Admin}---------use (get) in postman]

exports.createProduct = catchAsyncErrors(async (req, res, next) => {
  // only this line is to  assign the userId with the product that who have created it and it will show the userId in data base
  req.body.user = req.user.id;

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
  const resultPerPage = 5;
  const productCount = await Product.countDocuments();

  const apiFeature = new ApiFeatures(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);
  const products = await apiFeature.query;
  res.status(200).json({
    success: true,
    products,
    productCount,
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

// create new review and update the review

exports.createProductReview = catchAsyncErrors(async (req, res, next) => {
  const { rating, comment, productId } = req.body;

  const review = {
    user: req.user._id,
    name: req.user.name,
    rating: Number(rating),
    comment,
  };

  const product = await Product.findById(productId);

  const isReviewed = product.reviews.find(
    (rev) => rev.user.toString() === req.user._id.toString()
  );

  if (isReviewed) {
    product.reviews.forEach((rev) => {
      if (rev.user.toString() === req.user._id.toString())
        (rev.rating = rating), (rev.comment = comment);
    });
  } else {
    product.reviews.push(review);
    product.numOfReviews = product.reviews.length;
  }

  // to find average of reviews
  let avg = 0;

    product.reviews.forEach((rev) => {
      avg += rev.rating;
    }) 
    product.ratings = avg/ product.reviews.length;

  await product.save({ validateBeforeSave: false });
  res.status(200).json({
    success: true,
  });
});
