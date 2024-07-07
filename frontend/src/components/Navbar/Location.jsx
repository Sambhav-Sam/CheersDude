import React from "react";
import "/src/styles/Location.css";

const Location = () => {
  return (
    <div className="Box">
      <div className="Location">
        <p>Location</p>
        <span></span>
        <input type="text" placeholder="Add to your Location" />
      </div>
      <div className="Search">
        <input type="text" placeholder="Search for cheers today" />
        <img src="https://cdn-icons-png.flaticon.com/512/54/54481.png" alt="" />
      </div>
    </div>
  );
};

export default Location;
