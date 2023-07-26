import React from 'react';
import Expenses from './Components/SellerPage';


const App = () => {
    const expenses = [
    
    ];
   //  return React.createElement(
   //    'div',
   //    {},
   //    React.createElement('h2', {}, "Let's get started!"),
   //    React.createElement(Expenses, { items: expenses})
    
    return (
      <div>
      <Expenses items = {expenses} />
      
      </div>

    );
}
export default App