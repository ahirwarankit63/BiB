import React from "react";
import "./Navbar.css";



const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-lg ">
        <div className="container-fluid">
          {/* navbar logo */}
          <div className="brandLogo">  <a className="navbar-brand" href="/home">
            BookIBook
          </a>
          </div>

          {/* burger button for small screen */}
          <button
            className="navbar-toggler"
            id="burgerButton"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* home, products, contact, and about us section */}
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link " aria-current="page" href="/home">
                Home
              </a>
              <a className="nav-link" href="/product">
                Product
              </a>
              <a className="nav-link" href="/contact">
                Contact
              </a>
              <a className="nav-link" href="/about">
                About
              </a>
            </div>

            {/* search bar and search button */}
            <div className="container-fluid ">
              <form className="d-flex" role="search">
                <input
                  className="form-control-sm me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                ></input>
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>

            {/* mycart and profile icons logo  */}
            <div className="icons">
              <ul>
                <li>
                  <a className="myCartLogo" href="/cart">
                    <i className="bi bi-cart2 "> </i>
                  </a>
                </li>
                <li>
                  <a className="profileLogo" href="/profile">
                    <i className="bi bi-person-bounding-box"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>


    </>
  );
};



export default Navbar;
