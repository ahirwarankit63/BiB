import "./App.css";
import React from "react";
// import Carousel from "./component/Carousel/Carousel.js"
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./component/Layout/Navbar/Navbar";
import Footer from "./component/Layout/Footer/Footer.js";
function App() {

  
  return (
    <Router>

      <Navbar/>
      <Footer />
      {/* <Carousel /> */}
    </Router>
  );
}

export default App;
