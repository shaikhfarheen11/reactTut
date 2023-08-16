import React from 'react';
import ProductItem from './ProductItem';
import classes from './Products.module.css';

const productsArr = [
  {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  }
];

// Inside your Products.js component


const Products = () => {
  const productItems = productsArr.map(product => (
    <div key={product.title} className={classes.product}>
      <ProductItem
        title={product.title}
        price={product.price}
        imageUrl={product.imageUrl}
      />
    </div>
  ));

  return (
    <section className={classes.products}>
      <h2>Available Products</h2>
      {productItems}
    </section>
  );
};

export default Products;

