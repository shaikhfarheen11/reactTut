import React, {useState} from 'react';
import './App.css';
import ExpenseForm from './Components/ExpenseForm';
import Expenses from './Components/Expenses/Expenses';

const DUMMY_EXPENSES = () => [
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

  const App = () => {
      const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const saveExpenseDataHandler = expense => {
   setExpenses((prevExpeneses) => {
    return [expense, ...prevExpeneses];
   });
    };
  
  return (
    <div>
      <div className='app'>
      <h2>Let's get started</h2>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
      <Expenses items={expenses} />
    </div>
    </div>
  );
};

export default App;