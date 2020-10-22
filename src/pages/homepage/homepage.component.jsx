import React from "react";
import { Container } from "react-bootstrap";
import CarouselComponent from "../../components/carousel/carousel.component";

import "./homepage.styles.css";

import FeaturedDirectory from "../../components/featured-directory/featured-directory.component";
const HomePage = () => (
  <Container>
    <CarouselComponent className='carousel' />
    <FeaturedDirectory className='featured-directory' />
  </Container>
);

export default HomePage;
