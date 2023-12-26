import Expenses from "./expense";
import "../App/ExpenseList.css";

function ExpenseContent(props) {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback"> Found No Expense </h2>;
  } else if (props.items.length > 1) {
    return (
      <div className="expenses-list">
        {props.items.map((expense, index) => (
          <Expenses
            key={index}
            id={index}
            title={expense.item}
            amount={expense.cost}
            place={expense.place}
            date={expense.date}
          />
        ))}
      </div>
    );
  } else if (props.items.length === 1) {
    return (
      <div className="expenses-list">
        {props.items.map((expense, index) => (
          <Expenses
            key={index}
            id={index}
            title={expense.item}
            amount={expense.cost}
            place={expense.place}
            date={expense.date}
          />
        ))}
        <p>Only single Expense here. Please add more...</p>
      </div>
    );
  }
}

export default ExpenseContent;
