import React from "react";
import { Container, Jumbotron } from "react-bootstrap";
import CarouselComponent from "../../components/carousel/carousel.component";

import "./homepage.styles.css";

import FeaturedDirectory from "../../components/featured-directory/featured-directory.component";
import CustomDesigns from "../../components/custom-designs/custom-designs.component";
const HomePage = () => (
  <div>
    <CarouselComponent className='carousel' />
    <FeaturedDirectory className='featured-directory' />
    <CustomDesigns />
  </div>
);

export default HomePage;
