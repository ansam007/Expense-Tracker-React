import "./Expense.css";

function Expenses(props) {
  return (
    <div className="expense-item">
      <div>{props.date}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div>{props.place}</div>
      </div>
      <div className="expense-item__price">Rs.{props.amount}</div>
    </div>
  );
}

export default Expenses;
