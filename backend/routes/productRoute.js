const express = require("express");
const { getAllProducts, createProduct, updateProduct, deleteProduct, getProductDetails } = require("../controllers/productController");


const router= express.Router();

// for get all product

router.route("/products").get(getAllProducts);

// for get a single product details

router.route("/product/:id").get(getProductDetails);

// f0r new product

router.route("/product/new").post(createProduct);


// for update product

router.route("/product/:id").put(updateProduct);

// for delete Product

router.route("/product/:id").delete(deleteProduct);


module.exports = router;