import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

import FlowerCard from "../featured-item/featured-item.component";

import "./featured-directory.component.css";

class FeaturedDirectory extends React.Component {
  constructor() {
    super();

    this.state = {
      items: [
        {
          title: "flower1",
          imageUrl: "",
          description: "test",
          id: 1,
        },
        {
          title: "flower2",
          imageUrl: "",
          description: "test",
          id: 2,
        },
        {
          title: "flower3",
          imageUrl: "",
          description: "test",
          id: 3,
        },
        {
          title: "flower4",
          imageUrl: "",
          description: "test",
          id: 4,
        },
        {
          title: "flower5",
          imageUrl: "",
          description: "test",
          id: 5,
        },
        {
          title: "flower6",
          imageUrl: "",
          description: "test",
          id: 6,
        },
      ],
    };
  }

  render() {
    return (
      <Container>
        <h2 className='text-center'>Featured Items</h2>
        <Container className='directory-menu'>
          {this.state.items.map(({ id, ...otherItemProps }) => (
            <FlowerCard key={id} {...otherItemProps} />
          ))}
        </Container>
        <Link className='float-right view-more' to='/shop'>
          view more
        </Link>
      </Container>
    );
  }
}

export default FeaturedDirectory;
