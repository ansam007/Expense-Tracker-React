import "../css/UserExpense.css";
import ExpenseForm from "./ExpenseForm";
import {useState} from 'react';

const UserData = (props) => {

  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredData) => {
    const entereData = {
      ...enteredData
    }
    props.addExpense(entereData);
    setIsEditing(false);
  }

  const startEditingHandler = () => {
    setIsEditing(true);
  }

  const stopEditingHandler = () => {
    setIsEditing(false);
  }

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm saveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}></ExpenseForm>}
    </div>
  );
};

export default UserData;
