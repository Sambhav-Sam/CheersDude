import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "/src/styles/Navbar.css"

const Navbar = () => {
  return (
    <div className="Nav">
    <div className="Logo">
      <img src="/images/home-icon.svg" alt="Disney+" />
    </div>
        <div className="NavMenu">
          <Link to="/home">
            <span>HOME</span>
          </Link>
          <Link to="/">
            <span>SHOP</span>
          </Link>
          <Link to="/">
            <span>CATEGORY</span>
          </Link>
          <Link to="/">
            <span>CART</span>
          </Link>
          <Link to="/">
            <span>WISHLIST</span>
          </Link>
          <Link to="/">
            <span>PROFILE</span>
          </Link>
          <Link to="/">
            <span>MORE</span>
          </Link>
        </div>
  </div>
  );
};

export default Navbar;
