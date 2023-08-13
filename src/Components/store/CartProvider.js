// CartProvider.js

import React, { useState } from 'react';
import CartContext from './CartContext';

const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  const addToCartHandler = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCartHandler = (product) => {
    setCart((prevCart) => prevCart.filter((item) => item.name !== product.name));
  };

  const cartContextValue = {
    cart: cart,
    addToCart: addToCartHandler,
    removeFromCart: removeFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
