import React from 'react';
import classes from './ProductItem.module.css';

const ProductItem = (props) => {
  return (
    <div className={classes.productItem}>
      <img src={props.imageUrl} alt={props.title} />
      <h3>{props.title}</h3>
      <p>${props.price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductItem;
