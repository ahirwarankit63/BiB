const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
} = require("../controllers/productController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

// for get all product
router.route("/products").get(getAllProducts);

// for get a single product details
router.route("/product/:id").get(getProductDetails);

// f0r new product
router.route("/product/new").post(isAuthenticatedUser, authorizeRoles("admin"), createProduct);

// for update product

router.route("/product/:id").put(isAuthenticatedUser, authorizeRoles("admin"),  updateProduct);

// for deleting Product
router.route("/product/:id").delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct);

module.exports = router;
