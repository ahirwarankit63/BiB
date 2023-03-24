import React from 'react';
import "./Home.css";
import Product from "./Product.js";
import MetaData from '../Layout/MetaData';

const product = {
  name : "RB Tripathi",
  price : "₹400",
  images : [{ url:"https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b3BlbiUyMGJvb2t8ZW58MHx8MHx8&w=1000&q=80"}],
  _id : "hidhosghsgh",
}

const Home = () => {
  return (
    <>  
    <MetaData title={"BIB"}/>
      <div className='home'> 
        <h2 className='home_heading'>
          Featured Books
        </h2>
      </div> 
      <div className='container' id='container'>
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />

        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />

        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />


      </div>
    </>
  )
}

export default Home
