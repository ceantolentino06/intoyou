import React from "react";

import "./cart-item.styles.scss";
import itemPreview from "../../assets/img/flower.jpg";

const CartItem = ({ item: { imageUrl, price, title, quantity } }) => (
  <div className='cart-item'>
    <img src={itemPreview} alt='item' />
    <div className='item-details'>
      <span className='cart-title'>{title}</span>
      <span className='cart-price'>
        {quantity} x {price}
      </span>
    </div>
  </div>
);

export default CartItem;
