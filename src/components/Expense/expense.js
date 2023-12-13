import "../App/App.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";

function Expenses(props) {
  const sanitizedId = `item-${props.id}`;

  const handleDeleteClick = () => {
    const elementToDelete = document.querySelector(`.${sanitizedId}`).parentNode;
    if (elementToDelete) {
      elementToDelete.remove();
    }
  };

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <ExpenseDetails
        title={props.title}
        amount={props.amount}
        place={props.place}
      ></ExpenseDetails>
      <button
        style={{ marginLeft: "1rem" }}
        className={sanitizedId}
        onClick={handleDeleteClick}
      >
        Delete
      </button>
    </div>
  );
}

export default Expenses;