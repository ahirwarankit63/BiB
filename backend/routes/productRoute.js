const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
  createProductReview,
  getProductReviews,
  deleteReview,
} = require("../controllers/productController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

// for get all product
router.route("/products").get(getAllProducts);

// for get a single product details
router.route("/product/:id").get(getProductDetails);

// f0r new product
router.route("/admin/product/new").post(isAuthenticatedUser, authorizeRoles("admin"), createProduct);

// for update product

router.route("/admin/product/:id").put(isAuthenticatedUser, authorizeRoles("admin"),  updateProduct);

// for deleting Product
router.route("/admin/product/:id").delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct);

// for creating review
router.route("/review").put(isAuthenticatedUser, createProductReview); 

// Get All Review of a product
router.route("/reviews").get(getProductReviews);

//Delete Reviews
router.route("/reviews").delete(isAuthenticatedUser, deleteReview);


module.exports = router;
