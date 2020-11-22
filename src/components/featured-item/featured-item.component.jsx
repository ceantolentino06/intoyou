import React from "react";

import { Button, Card } from "react-bootstrap";
import flower from "../../assets/img/flower.jpg";
import "./featured-item.styles.scss";

const FlowerCard = ({ title, imageUrl, description }) => (
  <div className='card-container'>
    <img src={flower} alt='img-preview' />
    <div className='info-container'>
      <span>{title}</span>
      <span>$10</span>
    </div>
  </div>
);

export default FlowerCard;
