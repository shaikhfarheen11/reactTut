import React, { useState, useEffect } from 'react';
import './ExpenseForm.css';

const tablesData = [
  { id: 'Table 1' },
  { id: 'Table 2' },
  { id: 'Table 3' },
];

const ExpenseForm = () => {
  const [entereduniqueorderedid, setEnteredOrderedId] = useState('');
  const [enteredChoosePrice, setEnteredChoosePrice] = useState('');
  const [enteredChooseDish, setEnteredChooseDish] = useState('');
  const [enteredChooseTable, setEnteredChooseTable] = useState('');
  const [ordersList, setOrdersList] = useState([]);

  const handleOrderedId = (event) => {
    setEnteredOrderedId(event.target.value);
  };

  const handleChoosePrice = (event) => {
    setEnteredChoosePrice(event.target.value);
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
      uniqueOrderId: entereduniqueorderedid,
      choosePrice: enteredChoosePrice,
      chooseDish: enteredChooseDish,
      chooseTable: enteredChooseTable,
    };

    localStorage.setItem(entereduniqueorderedid, JSON.stringify(order));

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
    <div className="expense-form">
      <form onSubmit={handleSubmit}>
        {/* ... (rest of the form JSX code) */}
        <div className="form-control">
          <label htmlFor="uniqueorderid">Unique Order ID</label>
          <input
            type="number"
            id="uniqueorderid"
            value={entereduniqueorderedid}
            onChange={handleOrderedId}
          />
        </div>
        <div className="form-control">
        <label htmlFor="chooseprice">Choose Price</label>
        <input
          type="number"
          id="chooseprice"
          value={enteredChoosePrice}
          onChange={handleChoosePrice}
        />
      </div>
      <div className="form-control">
        <label htmlFor="choosedish">Choose Dish</label>
        <input
          type="text"
          id="expensechoosedish"
          value={enteredChooseDish}
          onChange={handleChooseDish}
        />
      </div>
      <div className="form-control">
        <label htmlFor="chooseaTable">Choose a Table</label>
        <select
          id="expensechooseTable"
          value={enteredChooseTable}
          onChange={handleChooseTable}
        >
          <option value="">select a Table</option>
          {tablesData.map((table) => (
            <option key={table.id} value={table.id}>
              {table.id}
            </option>
          ))}
        </select>
      </div>

        <button className="submit-button" type="submit">
          Add to bill
        </button>
      </form>

      <div className="table-info">
        <h2>Orders</h2>
        {tablesData.map((table) => {
          const tableId = table.id;

          // Filter the ordersList based on the selected table
          const tableOrders = ordersList.filter(
            (order) => order.chooseTable === tableId
          );

          return (
            <div key={tableId}>
              <h3>{tableId}</h3>
              {tableOrders.map((order, index) => (
                <div key={index}>
                  <div>
                    . {order.choosePrice} - { order.chooseTable } - {order.chooseDish} -
                  
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

export default ExpenseForm;
