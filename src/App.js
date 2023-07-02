import React from 'react';
import Expenses from './Components/ExpenseForm';


const App = () => {
    const expenses = [
     {
        id: 'el',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14),
        location: 'Delhi',

     
        },
     { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12), location: 'Bangalore'},
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
        
     }
    ];
   //  return React.createElement(
   //    'div',
   //    {},
   //    React.createElement('h2', {}, "Let's get started!"),
   //    React.createElement(Expenses, { items: expenses})
    
    return (
      <div>
        <h2>Let's get started</h2>
      <Expenses items = {expenses} />
      </div>

    );
}
export default App