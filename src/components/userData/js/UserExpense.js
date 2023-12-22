import "../css/UserExpense.css";
import ExpenseForm from "./ExpenseForm";

const UserData = (props) => {
  const saveExpenseDataHandler = (enteredData) => {
    const entereData = {
      ...enteredData
    }

    props.addExpense(entereData);
    
  }
  return (
    <div className="new-expense">
      <ExpenseForm saveExpenseData={saveExpenseDataHandler}></ExpenseForm>
    </div>
  );
};

export default UserData;
