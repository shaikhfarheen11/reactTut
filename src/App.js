import React from 'react';
import './App.css';
import ExpenseForm from './Components/ExpenseForm';
import Expenses from './Components/Expenses/Expenses';

const App = () => {
  const expenses = [
    {
      id: 'el',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location: 'Delhi',
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 2, 12),
      location: 'Bangalore',
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      location: 'Mumbai',
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 2, 12),
      location: 'Goa',
    },
  ];

  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
    };

  return (
    <div>
      <div className='app'>
      <h2>Let's get started</h2>
      <ExpenseForm onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
    </div>
  );
};

export default App;
