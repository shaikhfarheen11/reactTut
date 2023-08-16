import React, { useState } from 'react';
import './Product.css';
import { useProductContext } from '../store/ProductContext';

const Product = () => {
  const {
    sizeQuantities,
    handleSizeQuantityChange,
    addProduct,
    addedProducts,
  } = useProductContext();

  const [enteredTshirtName, setEnteredTshirtName] = useState('');
  const [enteredDescription, setEnteredDescription] = useState('');
  const [enteredChoosePrice, setEnteredChoosePrice] = useState('');
  const [isCartVisible] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const selectedSizes = Object.keys(sizeQuantities).filter(
      (size) => sizeQuantities[size] > 0
    );

    const newProduct = {
      tshirtName: enteredTshirtName,
      description: enteredDescription,
      choosePrice: enteredChoosePrice,
      selectedSizes: selectedSizes.map((size) => ({
        size,
        quantity: sizeQuantities[size],
      })),
    };

    // Call the addProduct function from context to add the new product
    addProduct(newProduct);

    setEnteredTshirtName('');
    setEnteredDescription('');
    setEnteredChoosePrice('');
    handleSizeQuantityChange('S', 0);
    handleSizeQuantityChange('M', 0);
    handleSizeQuantityChange('L', 0);
  };

  // const toggleCartVisibility = () => {
  //   setIsCartVisible(!isCartVisible);
  // };
  // const calculateTotalAmount = () => {
  //   let totalAmount = 0;
  
  //   addedProducts.forEach((product) => {
  //     const productPrice = parseFloat(product.choosePrice);
  //     const productTotal = product.selectedSizes.reduce((acc, sizeObj) => {
  //       return acc + parseFloat(sizeObj.quantity);
  //     }, 0);
  
  //     totalAmount += productPrice * productTotal;
  //   });
  
  //   return totalAmount.toFixed(2);
  // };

  return (
    <div className="e-commerce">
      <form onSubmit={handleSubmit}>
        <div className="product-control">
          <label htmlFor="tshirtname">TshirtName:</label>
          <input
            type="text"
            id="tshirtname"
            value={enteredTshirtName}
            onChange={(event) => setEnteredTshirtName(event.target.value)}
          />
        </div>
        <div className="product-control">
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            value={enteredDescription}
            onChange={(event) => setEnteredDescription(event.target.value)}
          />
        </div>
        
        <div className="product-control">
          <label htmlFor="choosePrice">Price:</label>
          <input
            type="number"
            id="choosePrice"
            value={enteredChoosePrice}
            onChange={(event) => setEnteredChoosePrice(event.target.value)}
          />
        </div>

        <div className="product-control">
          <label htmlFor="size">Sizes:</label>
          <label>
            <input
              type="number"
              name="size"
              value={sizeQuantities['Small']}
              onChange={(event) =>
                handleSizeQuantityChange('Small', event.target.value)
              }
            />
            S
          </label>
          <label>
            <input
              type="number"
              name="size"
              value={sizeQuantities['Medium']}
              onChange={(event) =>
                handleSizeQuantityChange('Medium', event.target.value)
              }
            />
            M
          </label>
          <label>
            <input
              type="number"
              name="size"
              value={sizeQuantities['Large']}
              onChange={(event) =>
                handleSizeQuantityChange('Large', event.target.value)
              }
            />
            L
          </label>
        </div>
        
        <button className="submit-button" type="submit">
          Add Product
        </button>
      </form>

      {isCartVisible && (
        <div className="cart-overlay">
          <div className="cart-content">
            <h2>Cart Items:</h2>
            <ul>
              {addedProducts.map((product, index) => (
                <li key={index}>
                  <p>{product.tshirtName} - {product.description} - {product.choosePrice}</p>
                  <p>Sizes:</p>
                  <ul>
                    {product.selectedSizes.map((sizeObj, sizeIndex) => (
                      <li key={sizeIndex}>
                        {sizeObj.size} - {sizeObj.quantity}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
           
            </div>
          </div>
        
      )}

<div className="added-products">
        <h2>Added Products:</h2>
        <ul>
          {addedProducts.map((product, index) => (
            <li key={index}>
             
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Product;