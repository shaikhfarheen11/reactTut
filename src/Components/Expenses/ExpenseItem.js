import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
import ExpenseDetails from './ExpenseDetails';


    const ExpenseItem = (props) => {
      const deleteExpenseHandler = () => {
        const expenseItem = document.querySelector('.expense-item');
        expenseItem.remove();
      }
        return (
          <Card className='expense-item'>

            <ExpenseDate date={props.date} />
            <div className='expense-item_description'>
              
            </div>
              <ExpenseDetails amount={props.amount} location={props.location} title={props.title} />
              <button className="expense-item_delete" onClick={deleteExpenseHandler}>
          Delete Expense
        </button>
       
          </Card>
        );
      }
      
      export default ExpenseItem;