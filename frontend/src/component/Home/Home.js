import React from 'react';
import { Fragment, useEffect } from "react";
import "./Home.css";
import Product from "./Product.js";
import MetaData from '../Layout/MetaData';
import { getProduct } from '../../Redux Folders/Actions/productActions';
import { useSelector, useDispatch } from "react-redux";
import Loader from "../Layout/Loader/loader.js"




const Home = () => {

  const dispatch = useDispatch();

  //importing the backend products from redux dev sate to action 

  const { loading, error, products, productsCount } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) :

        <Fragment>

          <MetaData title={"BIB"} />
          <div className='home'>
            <h2 className='home_heading'>
              Featured Books
            </h2>
          </div>
          <div className='container' id='container'>
            {products && products.map((product) => <Product product={product} />)}
          </div>
        </Fragment>
      }
    </Fragment>

  )
}

export default Home
