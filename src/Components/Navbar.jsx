import React from "react";
import Navbarimage from "/Guvi-blog-logo.webp";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
          <a class="navbar-brand" href="/">
            <img src={Navbarimage}></img>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="justify-content-end collapse navbar-collapse"
            id="navbarNavAltMarkup"
          >
            <div class="navbar-nav">
              <a
                class="nav-link active"
                aria-current="page"
                href="https://www.guvi.in/courses/"
              >
                Courses
              </a>
              <a class="nav-link" href="#">
                Live Classes
              </a>
              <a class="nav-link" href="#">
                Practice
              </a>
              <a class="nav-link">Resources</a>
              <a class="nav-link">Our Products</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
