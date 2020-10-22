import React from "react";

import { Button, Card } from "react-bootstrap";
import "./featured-item.styles.css";

const FlowerCard = ({ title, imageUrl, description }) => (
  <Card style={{ width: "18rem" }} className='card'>
    <Card.Img
      variant='top'
      src='https://cdn.shopify.com/s/files/1/0222/9834/products/klenrl_1024x1024.jpg?v=1526705080'
      className='card-image'
    />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{description}</Card.Text>
      <Button variant='primary'>Add to Cart</Button>
    </Card.Body>
  </Card>
);

export default FlowerCard;
