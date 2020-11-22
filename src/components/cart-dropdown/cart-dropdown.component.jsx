import React from "react";
import { Button } from "react-bootstrap";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => (
  <div className='cart-dropdown'>
    <div className='cart-items' />
    <Button variant='primary'>GO TO CHECKOUT</Button>
  </div>
);

export default CartDropdown;
