import "../App/App.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";

function Expenses(props) {
  const Id = `item-${props.id}`;

  const handleDeleteClick = () => {
    const elementToDelete = document.querySelector(`.${Id}`).parentNode.remove();
  };

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <ExpenseDetails
        title={props.title}
        amount={props.amount}
        place={props.place}>
      </ExpenseDetails>
      <button style={{ marginLeft: "1rem" }} className={Id} onClick={handleDeleteClick}> Delete </button>
    </div>
  );
}

export default Expenses;
