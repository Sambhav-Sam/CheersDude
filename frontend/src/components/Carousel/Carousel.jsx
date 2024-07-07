import React from "react";
import "/src/styles/Carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Carousel = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="carousel">
    <Slider className="slider" {...settings}>
      <div className="wrap">
        <a>
          <img src="/images/1.svg" alt="" />
        </a>
      </div>

      <div className="wrap">
        <a>
          <img src="/images/2.svg" alt="" />
        </a>
      </div>

      <div className="wrap">
        <a>
          <img src="/images/3.svg" alt="" />
        </a>
      </div>

      <div className="wrap">
        <a>
          <img src="/images/4.svg" alt="" />
        </a>
      </div>
    </Slider>
    </div>
  );
};

export default Carousel;
