import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [showForm, setShowForm] = useState(true);

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

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onAddExpense(expenseData);
    console.log(expenseData);

    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    setShowForm(false);
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  if (!showForm) {
    return (
      <div className="expense-form">
        <button className="submit-button" onClick={() => setShowForm(true)}>
          Add New Expense
      </button>
        
      </div>
    );
  }

  return (
    <div className="expense-form">
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="expenseTitle">Title</label>
          <input
            type="text"
            id="expenseTitle"
            value={enteredTitle}
            onChange={handleTitleChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="expenseAmount">Amount</label>
          <input
            type="number"
            id="expenseAmount"
            value={enteredAmount}
            onChange={handleAmountChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="expenseDate">Date</label>
          <input
            type="date"
            id="expenseDate"
            value={enteredDate}
            onChange={handleDateChange}
          />
        </div>
        <button className="cancel-button" type="button" onClick={handleCancel}>
          Cancel
        </button>
        <button className="submit-button" type="submit">
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
 