import React from 'react';
import { Link } from "react-router-dom";
//for ratings
import ReactStars from "react-rating-stars-component";


const Product = ({ product }) => {

  const options = {
    edit: false, 
    color: "rgba(20,20,20,0.1)",
    activeColor: "tomato",
    size : window.innerWidth <600 ? 20 : 25,  //windowWidth < 600 then star size = 20 .....windowWidth > 600 then star size = 25px...
    value: product.ratings,
    //to show the rating of half star also
    isHalf : true,
  };

  return (
    <Link className='productCard' to={product._id}>
      {/* here in the image tag we are receiving the first image of the product/book because there is an array of images of a single product i.e. a single product is containing more than one image */}
      <img src={product.images[0] ? product.images[0].url : ''} alt={product.name} />

      <p>{product.name}</p>
      <div>
        <ReactStars {...options} />
        <span>
          ({product.numOfReviews} Reviews)
        </span>
      </div>
      <span>
      <p>{`₹${product.price}`}</p>
      </span>
    </Link>
  );
};

export default Product;
