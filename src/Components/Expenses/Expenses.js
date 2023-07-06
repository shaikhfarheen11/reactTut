
import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {

    const[filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };
    return(
        <Card className="expenses">
            <ExpensesFilter selected = {filteredYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>
            <ExpenseItem
            title={props.items[0].title}
            amount={props.items[0].amount}
            date={props.items[0].date}
            location={props.items[0].location}
           
           />
            <ExpenseItem
             title={props.items[1].title}
             amount={props.items[1].amount}
             date={props.items[1].date}
            location={props.items[1].location}
            
             />
              <ExpenseItem
             title={props.items[2].title}
             amount={props.items[2].amount}
             date={props.items[2].date}
             location={props.items[2].location}
        
           
             />
              <ExpenseItem
             title={props.items[3].title}
             amount={props.items[3].amount}
             date={props.items[3].date}
             location={props.items[3].location}
             
             
             />
        </Card>

    );
}
export default Expenses;