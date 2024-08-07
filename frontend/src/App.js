import "./App.css";
import React from "react";
// import Carousel from "./component/Carousel/Carousel.js"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./component/Layout/Navbar/Navbar";
import Footer from "./component/Layout/Footer/Footer.js";
import Carousel from "./component/Layout/Carousel/Carousel";
import Home from "./component/Home/Home.js"
import loader from "./component/Layout/Loader/loader";
function App() {

  
  return (
    <Router>

      <Navbar/>
      <Carousel />
      <Home />
      <Footer />
    </Router>
  );
}

export default App;
