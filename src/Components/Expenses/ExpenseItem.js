import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
import ExpenseDetails from './ExpenseDetails';

const ExpenseItem = (props) => {
  const [amount, setAmount] = useState(props.amount);

  const changeAmountHandler = () => {
    setAmount(100);
  };

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item_description'>
        </div>
        <ExpenseDetails amount={amount} location={props.location} title={props.title} />
        <button className="expense-item_button" onClick={changeAmountHandler}>
          Change Amount
        </button>
        
    </Card>
  );
}

export default ExpenseItem;
