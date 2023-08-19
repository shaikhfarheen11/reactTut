import React, { useContext } from 'react';
import CartContext from '../store/cart-context'; // Make sure to import CartContext
import CartIcon from '../Cart/CartIcon'; // Import CartIcon here

import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const totalItems = cartCtx.items.reduce((acc, item) => acc + item.amount, 0);
  const selectedSizes = cartCtx.items.map(item => item.selectedSize).join(', '); 

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon /> {/* Use CartIcon here */}
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{totalItems}</span>
      <span className={classes.size}>{selectedSizes}</span>
    </button>
  );
};

export default HeaderCartButton;
