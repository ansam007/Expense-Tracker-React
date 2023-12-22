import "../App/Expense.css";
import {useState} from "react";


function ExpenseDetails(props) {

  const [amount, setAmount] = useState(props.amount);

  var changeExpense = () => {
    setAmount(10000);
  }

  return (
    <div className="expense-item__description">
      <div>
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__location">{props.place}</div>
      <div className="expense-item__price">Rs.{amount} </div>
      <button onClick={changeExpense}>Change Expense</button>
    </div>
  );
}

export default ExpenseDetails;