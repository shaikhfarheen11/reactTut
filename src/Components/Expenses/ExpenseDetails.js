import './ExpenseDetails.css';
function ExpenseDetails(props) {
    return (
      <div className='expense-details'>
        <div className="expense-details_title">{props.title}</div>
        <div className="expense-details_amount">${props.amount}</div>
        <div className="expense-details_location">{props.location}</div>
      </div>
    );
  }
  
  export default ExpenseDetails;