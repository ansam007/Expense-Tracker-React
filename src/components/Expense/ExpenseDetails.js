import "../App/Expense.css";

function ExpenseDetails(props) {
  return (
    <span className="expense-item__description">
      <div>
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__location">{props.place}</div>
      <div className="expense-item__price">Rs.{props.amount} </div>
    </span>
  );
}

export default ExpenseDetails;