import React , {Component, useState} from 'react';
import slide1 from "./slider/slide1.jpg" ;
import slide2 from "./slider/slide2.jpg" ;
import slide3 from "./slider/slide3.jpg" ;
import { BsCircle } from "react-icons/bs";
import { BsChevronCompactLeft } from "react-icons/bs";
import { BsChevronCompactRight } from "react-icons/bs";
import Slider from "react-slick";


import "./slideshow.css" ;



function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };
  return (
  <section id='slideshow'>
      <div className="slider-container containerstyles" style={{textAlign :"center"}} >
      <Slider {...settings} >
        <div>
          <img src={slide1} className='img-slide' />
        </div>
        <div>
          <img src={slide2}  className='img-slide'  />
        </div>
        <div>
          <img src={slide3}  className='img-slide'  />
        </div>
       
      </Slider>
    </div>
  </section>
  );
}

export default SimpleSlider;



