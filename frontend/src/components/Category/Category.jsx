import React from "react";
import { Link } from "react-router-dom";
import "/src/styles/Category.css";

const Category = () => {
  return (
    <div className="category">
      <h1>Category</h1>
      <div className="content">
        <div className="wrapping">
          <Link to="/event">
            <img src="/images/1.png" alt="" />
          </Link>
          <p>Beer</p>
        </div>
        <div className="wrapping1">
          <Link to="/event">
            <img src="/images/2.png" alt="" />
          </Link>
          <p>Beer</p>
        </div>
        <div className="wrapping">
          <Link to="/event">
            <img src="/images/3.png" alt="" />
          </Link>
          <p>Beer</p>
        </div>
        <div className="wrapping1">
          <Link to="/event">
            <img src="/images/4.png" alt="" />
          </Link>
          <p>Beer</p>
        </div>
        <div className="wrapping">
          <Link to="/event">
            <img src="/images/5.png" alt="" />
          </Link>
          <p>Beer</p>
        </div>
        <div className="wrapping1">
          <Link to="/event">
            <img src="/images/4.png" alt="" />
          </Link>
          <p>Beer</p>
        </div>
        <div className="wrapping">
          <Link to="/event">
            <img src="/images/3.png" alt="" />
          </Link>
          <p>Beer</p>
        </div>
        <div className="wrapping1">
          <Link to="/event">
            <img src="/images/4.png" alt="" />
          </Link>
          <p>Beer</p>
        </div>
        <div className="wrapping">
          <Link to="/event">
            <img src="/images/3.png" alt="" />
          </Link>
          <p>Beer</p>
        </div>
        <div className="wrapping1">
          <Link to="/event">
            <img src="/images/4.png" alt="" />
          </Link>
          <p>Beer</p>
        </div>
        <div className="wrapping">
          <Link to="/event">
            <img src="/images/3.png" alt="" />
          </Link>
          <p>Beer</p>
        </div>
        <div className="wrapping1">
          <Link to="/event">
            <img src="/images/4.png" alt="" />
          </Link>
          <p>Beer</p>
        </div>
        <div className="wrapping">
          <Link to="/event">
            <img src="/images/3.png" alt="" />
          </Link>
          <p>Beer</p>
        </div>
        <div className="wrapping1">
          <Link to="/event">
            <img src="/images/4.png" alt="" />
          </Link>
          <p>Beer</p>
        </div>
      </div>
    </div>
  );
};

export default Category;
