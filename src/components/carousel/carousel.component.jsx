import React from "react";
import { Carousel } from "react-bootstrap";
import slide1 from "../../assets/img/cover.png";

import "./carousel.styles.css";

const CarouselComponent = () => (
  <Carousel controls={false} className='slider'>
    <Carousel.Item interval={6000}>
      <img className='d-block w-100' src={slide1} alt='First slide' />
      <Carousel.Caption></Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className='d-block w-100'
        src='https://i.pinimg.com/originals/12/e1/85/12e185db29cb14aed67d4a65df99de12.jpg'
        alt='Third slide'
      />

      <Carousel.Caption>
        <h1 className='caption'>SPEAK YOUR HEART OUT</h1>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

export default CarouselComponent;
