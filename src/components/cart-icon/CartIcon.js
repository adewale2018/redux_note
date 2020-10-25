import React from "react";

import "./CartIcon.scss";
import { ReactComponent as ShoppingCart } from "../../assets/11.2 shopping-bag.svg";

const CartIcon = () => {
  return (
    <div className='cart-icon'>
      <ShoppingCart className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  );
};

export default CartIcon;
