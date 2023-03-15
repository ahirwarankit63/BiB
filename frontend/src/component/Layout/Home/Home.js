import React from 'react'
import "./Home.css"
import Product from "./Product.js"

const product = {
  name : "RB Tripathi",
  price : "₹400",
  images : [{ url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbTX0mvWV40iwuM5P_deNJfg16J-MmUTMQCyVl2KEIkQ&s"  }],
  _id : "hidhosghsgh",
}

const Home = () => {
  return (
    <>  
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
