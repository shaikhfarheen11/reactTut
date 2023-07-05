import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const handleTitleChange = (event) => {
    setEnteredTitle(event.target.value);
  };

  const handleAmountChange = (event) => {
    setEnteredAmount(event.target.value);
  };

  const handleDateChange = (event) => {
    setEnteredDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents form submission and page reload
    // Do something with the entered data, such as sending it to a server
    console.log(enteredTitle, enteredAmount, enteredDate);
    // Reset the form after submission
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    };
    props.onAddExpense(expenseData);
    console.log(expenseData);
  };

  return (
    <div className="expense-form">
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="expenseTitle">Expense Title</label>
          <input
            type="text"
            id="expenseTitle"
            value={enteredTitle}
            onChange={handleTitleChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="expenseAmount">Expense Amount</label>
          <input
            type="number"
            id="expenseAmount"
            value={enteredAmount}
            onChange={handleAmountChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="expenseDate">Expense Date</label>
          <input
            type="date"
            id="expenseDate"
            value={enteredDate}
            onChange={handleDateChange}
          />
        </div>
        <button className="submit-button" type="submit">Add Expense</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
