import React, { useContext } from 'react';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../store/cart-context';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const totalItems = cartCtx.items.reduce((acc, item) => acc + item.amount, 0);
  const selectedSizes = cartCtx.items.map(item => item.selectedSize).join(', '); 

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{totalItems}</span>
      <span className={classes.size}>{selectedSizes}</span> {/* Display all selected sizes */}

    </button>
  );
};

export default HeaderCartButton;