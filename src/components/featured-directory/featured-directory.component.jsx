import React from "react";

import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

import FlowerCard from "../featured-item/featured-item.component";

import "./featured-directory.component.css";
import { connect } from "react-redux";
import userReducer from "../../redux/user/user.reducer";

class FeaturedDirectory extends React.Component {
  render() {
    const { shop } = this.props;
    return (
      <Container>
        <div className='browse-container'>
          <h3>Browse Designs</h3>
          <Link className='see-more' to='/shop'>
            see more
          </Link>
        </div>
        <div className='directory-menu'>
          {shop.map(({ id, ...otherItemProps }) => (
            <Link to={`/shop/${id}`} key={id} className='flowercard'>
              <FlowerCard key={id} {...otherItemProps} />
            </Link>
          ))}
        </div>
      </Container>
    );
  }
}

const mapStateToProps = ({ item }) => ({
  shop: item.items,
});

export default connect(mapStateToProps)(FeaturedDirectory);
