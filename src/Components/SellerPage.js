import React, { useState, useEffect } from 'react';
import './SellerPage.css';

const SellerPage = () => {
  const [enteredProductid, setEnteredProductId] = useState('');
  const [enteredSellingPrice, setEnteredSellingPrice] = useState('');
  const [enteredProductName, setEnteredProductName] = useState('');
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    // Load data from local storage when the component mounts
    const productsFromStorage = Object.values(localStorage).map((item) =>
      JSON.parse(item)
    );
    setProductList(productsFromStorage);
  }, []);

  const handleProductId = (event) => {
    setEnteredProductId(event.target.value);
  };

  const handleSellingPrice = (event) => {
    setEnteredSellingPrice(event.target.value);
  };

  const handlePruductName = (event) => {
    setEnteredProductName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newProduct = {
      orderId: enteredProductid,
      expenseamount: enteredSellingPrice,
      description: enteredProductName,
    };

    setProductList((prevProductList) => [...prevProductList, newProduct]);

    localStorage.setItem(enteredProductid, JSON.stringify(newProduct));

    // setEnteredProductId('');
    // setEnteredSellingPrice('');
    // setEnteredProductName('');
  };

  const handleDeleteProduct = (index) => {
    const productIdToDelete = productList[index].orderId;

    // Remove the product from local storage
    localStorage.removeItem(productIdToDelete);

    
  const updatedProductList = [...productList];
  updatedProductList.splice(index, 1);
  setProductList(updatedProductList);
};

  // Calculate the total value of all products

  const getTotalValue = () => {
    const total = productList.reduce((sum, product) => {
      return sum + +product.expenseamount;
    }, 0);
    return total.toFixed(2);
  };

  return (
    <div className="seller-admin">
      <form onSubmit={handleSubmit}>
        <div className="product-control">
          <label htmlFor="productid">Product ID:</label>
          <input
            type="number"
            id="productid"
            value={enteredProductid}
            onChange={handleProductId}
          />
        </div>
        <div className="product-control">
          <label htmlFor="chooseprice">Selling Price:</label>
          <input
            type="number"
            id="chooseprice"
            value={enteredSellingPrice}
            onChange={handleSellingPrice}
          />
        </div>
        <div className="product-control">
          <label htmlFor="productname">Product Name:</label>
          <input
            type="text"
            id="expenseproductname"
            value={enteredProductName}
            onChange={handlePruductName}
          />
        </div>

        <button className="submit-button" type="submit">
          Add Product
        </button>
      </form>

      <div className="product-info">
        <h2>Products</h2>
        {productList.map((product, index) => (
          <div key={index}>
            <span className="big-dot" />
            {product.expenseamount} - {product.description} -{' '}
            <button className="delete-button" onClick={() => handleDeleteProduct(index)}> Delete Product
            </button>
          </div>
        ))}
      </div>

      <div className="total-value">
        <h2>Total Value Worth Of Products: {getTotalValue() > 0 ? `Rs ${getTotalValue()}` : 'Rs 0'}</h2>
       
      </div>
    </div>
  );
};

export default SellerPage;
