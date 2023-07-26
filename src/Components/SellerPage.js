import React, { useState, useEffect } from 'react';
import './SellerPage.css';

const productData = [
  { id: 'Electronics', display: 'Electronic Items' },
  { id: 'Food' , display: 'Food Items'},
  { id: 'SkinCare', display: 'SkinCare Items' },
];

const SellerPage = () => {
  const [enteredProductid, setEnteredProductId] = useState('');
  const [enteredSellingPrice, setEnteredSellingPrice] = useState('');
  const [enteredProductName, setEnteredProductName] = useState('');
  const [enteredChooseCategory, setEnteredChooseCategory] = useState('');
  const [ordersList, setOrdersList] = useState([]);

  const handleProductId = (event) => {
    setEnteredProductId(event.target.value);
  };

  const handleSellingPrice = (event) => {
    setEnteredSellingPrice(event.target.value);
  };

  const handlePruductName = (event) => {
    setEnteredProductName(event.target.value);
  };

  const handleChooseCategory = (event) => {
    setEnteredChooseCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const order = {
      productId: enteredProductid,
      choosePrice: enteredSellingPrice,
      chooseProduct: enteredProductName,
      chooseCategory: enteredChooseCategory,
    };
    const existingOrders = JSON.parse(localStorage.getItem(enteredProductid)) || [];
    existingOrders.push(order);

    localStorage.setItem(enteredProductid, JSON.stringify(existingOrders));

    setOrdersList((prevOrders) => [...prevOrders, order]);

    // setEnteredOrderedId('');
    // setEnteredChoosePrice('');
    // setEnteredChooseDish('');
    // Do not reset enteredChooseTable to an empty string
  };

  const handleDeleteOrder = (orderId) => {
    localStorage.removeItem(orderId);
    // Update the ordersList state after deleting an order
    setOrdersList((prevOrders) =>
      prevOrders.filter((order) => order.productId !== orderId)
    );
  };

  useEffect(() => {
    const ordersData = Object.keys(localStorage).map((orderId) =>
      JSON.parse(localStorage.getItem(orderId))
    );
    setOrdersList(ordersData);
  }, []); // Add ordersList as a dependency to useEffect
  
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
      <div className="product-control">
        <label htmlFor="chooseaCategory">Choose a Category:</label>
        <select
          id="expensechooseCategory"
          value={enteredChooseCategory}
          onChange={handleChooseCategory}
        >
          <option value="">select a Category</option>
          {productData.map((products) => (
            <option key={products.id} value={products.id}>
              {products.id}
            </option>
          ))}
        </select>
      </div>

        <button className="submit-button" type="submit">
          Add Product
        </button>
      </form>

      <div className="product-info">
        <h2>Products</h2>
        {productData.map((products) => {
          const productId = products.id;
          const categoryDisplay = products.display;

          // Filter the ordersList based on the selected table
          const productOrders = ordersList.filter(
            (order) => order.chooseCategory === productId
          );

          return (
            <div key={productId}>
              <h3>{categoryDisplay}</h3>
              {productOrders.map((order, index) => (
                <div key={index}>
                  <div>
                  <span className="big-dot" />
                     {order.choosePrice} - { order.chooseCategory } - {order.chooseProduct} - 
                  
                   <button
                    className="delete-button"
                    onClick={() => handleDeleteOrder(order.productId)}
                  >
                    Delete Order
                  </button>
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SellerPage;
