import React, { useState, useEffect } from 'react';
import './WaiterLife.css';

const productData = [
  { id: 'Table 1' , display: 'Table 1' },
  { id: 'Table 2' , display: 'Table 2'},
  { id: 'Table 3', display: 'Table 3' },
];

const WaiterLife = () => {
  const [enteredUniqueorderid, setEnteredUniqueId] = useState('');
  const [enteredSellingPrice, setEnteredSellingPrice] = useState('');
  const [enteredChooseDish, setEnteredChooseDish] = useState('');
  const [enteredChooseaTable, setEnteredChooseTable] = useState('');
  const [ordersList, setOrdersList] = useState([]);

  const handleUniqueOrderId = (event) => {
    setEnteredUniqueId(event.target.value);
  };

  const handleSellingPrice = (event) => {
    setEnteredSellingPrice(event.target.value);
  };

  const handleChooseDish = (event) => {
    setEnteredChooseDish(event.target.value);
  };

  const handleChooseTable = (event) => {
    setEnteredChooseTable(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const order = {
      uniqueOrderId: enteredUniqueorderid,
      sellingPrice: enteredSellingPrice,
      chooseDish: enteredChooseDish,
      chooseTable: enteredChooseaTable,
    };
    const existingOrders = JSON.parse(localStorage.getItem(enteredUniqueorderid)) || [];
    existingOrders.push(order);

    localStorage.setItem(enteredUniqueorderid, JSON.stringify(existingOrders));

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
      prevOrders.filter((order) => order.uniqueOrderId !== orderId)
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
          <label htmlFor="Uniqueid">Unique Order ID:</label>
          <input
            type="number"
            id="uniqueorderid"
            value={enteredUniqueorderid}
            onChange={handleUniqueOrderId}
          />
        </div>
        <div className="product-control">
        <label htmlFor="sellingprice">Choose Price:</label>
        <input
          type="number"
          id="sellingprice"
          value={enteredSellingPrice}
          onChange={handleSellingPrice}
        />
      </div>
      <div className="product-control">
        <label htmlFor="choosedish">Choose Dish:</label>
        <input
          type="text"
          id="expensechoosedish"
          value={enteredChooseDish}
          onChange={handleChooseDish}
        />
      </div>
      <div className="product-control">
        <label htmlFor="chooseaTable">Choose a Table:</label>
        <select
          id="expensechooseaTable"
          value={enteredChooseaTable}
          onChange={handleChooseTable}
        >
          <option value="">select a Table</option>
          {productData.map((products) => (
            <option key={products.id} value={products.id}>
              {products.id}
            </option>
          ))}
        </select>
      </div>

        <button className="submit-button" type="submit">
          Add to bill
        </button>
      </form>

      <div className="product-info">
        <h2>Orders</h2>
        {productData.map((products) => {
          const uniqueOrderId = products.id;
          const categoryDisplay = products.display;

          // Filter the ordersList based on the selected table
          const productOrders = ordersList.filter(
            (order) => order.chooseTable === uniqueOrderId
          );

          return (
            <div key={uniqueOrderId}>
              <h3>{categoryDisplay}</h3>
              {productOrders.map((order, index) => (
                <div key={index}>
                  <div>
                  <span className="big-dot" />
                     {order.sellingPrice} - { order.chooseTable } - {order.chooseDish} - 
                  
                   <button
                    className="delete-button"
                    onClick={() => handleDeleteOrder(order.uniqueOrderId)}
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

export default WaiterLife;