import "./Expense.css";

function ExpenseDetails(props) {
  return (
    <span>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div>{props.place}</div>
      <div className="expense-item__price">Rs.{props.amount} </div>
    </span>
  );
}

export default ExpenseDetails;