import React from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems }) => (
  <div className='cart-dropdown'>
    <span className='my-cart'>MY CART</span>
    <div className='cart-items'>
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <Button variant='primary'>GO TO CHECKOUT</Button>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CartDropdown);
