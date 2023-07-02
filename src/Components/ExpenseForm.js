import React from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
  const handleInputChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <div className="expense-form">
      <form>
        <div className="form-control">
          <label htmlFor="expenseTitle">Expense Title</label>
          <input type="text" id="expenseTitle" onChange={handleInputChange} />
        </div>
        <div className="form-control">
          <label htmlFor="expenseAmount">Expense Amount</label>
          <input type="number" id="expenseAmount" onChange={handleInputChange} />
        </div>
        <div className="form-control">
          <label htmlFor="expenseDate">Expense Date</label>
          <input type="date" id="expenseDate" onChange={handleInputChange} />
        </div>
      </form>
      <button className="submit-button">App Expense</button>
    </div>
  );
};

export default ExpenseForm;

