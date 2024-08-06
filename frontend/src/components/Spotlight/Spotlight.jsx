import React from 'react'
import "/src/styles/Spotlight.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Spotlight = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
      };
  return (
    <div className="spotlight">
        <div className="heading">
            <h1>Cheers Spotlight</h1>
        </div>
        <Slider className="slider2" {...settings}>
      <div className="wrap2">
        <a>
          <img src="/images/1.svg" alt="" />
        </a>
      </div>

      <div className="wrap2">
        <a>
          <img src="/images/2.svg" alt="" />
        </a>
      </div>
      <div className="wrap2">
        <a>
          <img src="/images/2.svg" alt="" />
        </a>
      </div>
      <div className="wrap2">
        <a>
          <img src="/images/2.svg" alt="" />
        </a>
      </div>
    </Slider>
    </div>
  )
}

export default Spotlight