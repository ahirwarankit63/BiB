import React from "react";
import "./Carousel.css"
import carousel1 from "../../../images/carousel1.png";
import carousel2 from "../../../images/carousel2.jpg";
import carousel3 from "../../../images/carousel3.png";

const Carousel = () => {
  return (
    <>


    {/* the bootstrap code to slide the carousel images using next and prev buttons has been  written in the index.html file that is bootstrap library code */}
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={carousel1} className="d-block w-100" alt="first slide" />
            
          </div>
          <div className="carousel-item">
            <img src={carousel2} className="d-block w-100" alt="2nd slide" />
            
          </div>
          <div className="carousel-item">
            <img src={carousel3} className="d-block w-100" alt="3rd slide" />
            
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Carousel;
