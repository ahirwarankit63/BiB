const Product = require("../models/productModel");

// create product [acc. by {Admin}---------use (get) in postman]

exports.createProduct = async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
};

// Get single product details
exports.getProductDetails = async(req,res,next) => {
    const product = await Product.findById(req.params.id);

    // if product is not found then show the output as product not found
    if(!product) {
        return res.status(500).json({
            success : false,
            message : " Product not found"
        })
    }
    
    // If product is found then show all the details
    res.status(200).json ({
        success : true,
        product
    })
}

// Get All product [acc. by {Admin}---------use (get) in postman]

exports.getAllProducts = async (req, res) => {
  const product = await Product.find();
  res.status(200).json({
    success: true,
    product,
  });
};


// update products  [acc. by {Admin}------use (put) in postman]

exports.updateProduct = async (req, res, next) => {
let product = Product.findById(req.params.id);


    // -->if product is not found then simply throw output "product not found"
if(!product) {
    return res.status(500).json({
        success: false,
        message: " product not found"
    })
}

    // -->if product is found then update it
    product = await Product.findByIdAndUpdate( req.params.id, req.body, {
        new : true,
        runValidators: true,
        useFindAndMOdify : false
    }),

    res.status(200).json({
        success: true,
        product
    })



}

// Delete Product 

exports.deleteProduct = async(req,res,next) => {
    const product = await Product.findById(req.params.id);

    if(!product) {
        return res.status(500).json({
            success : false,
            message : " Product not found"
        })
    }

    await product.remove();

    res.status(200).json ({
        success : true,
        message : "Product Deleted Successfully" 
    })
}

