import './ExpenseItem.css';
function ExpenseDetails(props) {
    return (
      <div className='expense-details'>
        <div>Title: {props.title}</div>
        <div>Amount: ${props.amount}</div>
        <div>Location: {props.location}</div>
      </div>
    );
  }
  
  export default ExpenseDetails;