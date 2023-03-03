import React from "react";
import "./Navbar.css";



const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary shadow-lg ">
        <div class="container-fluid">
          {/* navbar logo */}
          <div className="brandLogo">  <a class="navbar-brand" href="/home">
            BookIBook
          </a>
          </div>

          {/* burger button for small screen */}
          <button
            class="navbar-toggler"
            id="burgerButton"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          {/* home, products, contact, and about us section */}
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link " aria-current="page" href="/home">
                Home
              </a>
              <a class="nav-link" href="/product">
                Product
              </a>
              <a class="nav-link" href="/contact">
                Contact
              </a>
              <a class="nav-link" href="/about">
                About
              </a>
            </div>

            {/* search bar and search button */}
            <div class="container-fluid ">
              <form class="d-flex" role="search">
                <input
                  class="form-control-sm me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                ></input>
                <button class="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>

            {/* mycart and profile icons logo  */}
            <div className="icons">
              <ul>
                <li>
                  <a className="myCartLogo" href="/cart">
                    <i class="bi bi-cart2 "> </i>
                  </a>
                </li>
                <li>
                  <a className="profileLogo" href="/profile">
                    <i class="bi bi-person-bounding-box"></i>
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
