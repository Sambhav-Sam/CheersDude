import React from "react";
import { Link } from "react-router-dom";
import "/src/styles/TopChoice.css";

const TopChoice = () => {
  return (
    <div className="topchoice">
      <div className="seeall">
        <h1>Top Choice</h1>
        <a href="category">See All -> </a>
      </div>
      <div className="choices">
        <div className="choiceslist">
          <Link>
            <img className="first" src="/images/1.png" alt="" />
          </Link>
          <div className="plus">
            <img className="second" src="/images/plus.png" alt="" />
          </div>
        </div>
        <div className="choiceslist">
          <Link>
            <img className="first" src="/images/1.png" alt="" />
          </Link>
          <div className="plus">
            <img className="second" src="/images/plus.png" alt="" />
          </div>
        </div>
        <div className="choiceslist">
          <Link>
            <img className="first" src="/images/1.png" alt="" />
          </Link>
          <div className="plus">
            <img className="second" src="/images/plus.png" alt="" />
          </div>
        </div>
        <div className="choiceslist">
          <Link>
            <img className="first" src="/images/1.png" alt="" />
          </Link>
          <div className="plus">
            <img className="second" src="/images/plus.png" alt="" />
          </div>
        </div>
        <div className="choiceslist">
          <Link>
            <img className="first" src="/images/1.png" alt="" />
          </Link>
          <div className="plus">
            <img className="second" src="/images/plus.png" alt="" />
          </div>
        </div>
        <div className="choiceslist">
          <Link>
            <img className="first" src="/images/1.png" alt="" />
          </Link>
          <div className="plus">
            <img className="second" src="/images/plus.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopChoice;
