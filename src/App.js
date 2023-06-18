import ExpenseItem from './Components/ExpenseItem';
function App(){
    const expenses = [
     {
        id: 'el',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14),
        location: 'Goa',


     },
     { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12), location: 'Bangalore'},
     {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2021, 2, 28),
        location: 'Delhi',
     },
     {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2021, 2, 12),
        location: 'Mumbai',
     }
    ];
    const renderedExpenses = [];
  for (let i = 0; i < 100; i++) {
    renderedExpenses.push(
      <ExpenseItem
        key={`expense-${i}`}
        name={`Expense ${i + 1}`}
        amount={Math.random() * 100}
        date={new Date()}
        location={expenses[i % expenses.length].location}
      

        
      />
    );
  }

    return (
      <div>
        <h2>Let's get started</h2>
        {renderedExpenses}
      </div>
    );
  }
  
    
export default App