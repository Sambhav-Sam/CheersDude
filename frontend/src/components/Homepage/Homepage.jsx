import React from 'react'
import Carousel from '../Carousel/Carousel';
import Category from '../Category/Category';
import Location from '../Navbar/Location';
import Navbar from '../Navbar/Navbar';
import Spotlight from '../Spotlight/Spotlight';
import TopChoice from '../TopChoice/TopChoice';
import "/src/styles/Homepage.css"

const Homepage = () => {
  return (
    <div className="homepage">
    <Navbar />
    <Location />
    <Carousel />
    <Category />
    <TopChoice />
    <Spotlight />
    </div>
  )
}

export default Homepage;