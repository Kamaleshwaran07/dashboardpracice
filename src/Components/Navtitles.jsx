import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navtitles = () => {
  return (
    <div className="navTitles container-fluid">
      <nav className="navbar ">
        <div className="">
          <Link className="navlinks" to="/">
            All
          </Link>
          <Link className="navlinks" to="/FSD">
            Full Stack Development
          </Link>
          <Link className="navlinks" to="/DS">
            Data Science
          </Link>
          <Link className="navlinks" to="/CS">
            Cyber Security
          </Link>
          <Link className="navlinks" to="/Career">
            Career
          </Link>
          {/* Linking the Individual Components */}
        </div>
      </nav>
    </div>
  );
};

export default Navtitles;
