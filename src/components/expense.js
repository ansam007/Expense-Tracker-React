import "./Expense.css";
import ExpenseDate from "./ExpenseDate";
function Expenses(props) {

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">Rs.{props.amount}</div>
    </div>
  );
}

export default Expenses;
