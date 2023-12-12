import "../App/App.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";

function Expenses(props) {

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <ExpenseDetails title={props.title} amount={props.amount} place={props.place}></ExpenseDetails>
    </div>
  );
}

export default Expenses;
