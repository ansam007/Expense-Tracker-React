import "../css/ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {

  const[enteredTitle, setTitle] = useState('');
  const[enteredAmount, setAmount] = useState('');
  const[enteredDate, setDate] = useState('');

    function titleChanged (event){
      setTitle(event.target.value);
    }
    function amountChanged (event){ 
      setAmount(event.target.value);
    }
    function dateChanged (event){
      setDate(event.target.value);
    }

    function setHandler(event){
      event.preventDefault();

      var enterData = {
        item : enteredTitle,
        cost : enteredAmount,
        date : new Date(enteredDate)
      }

      props.saveExpenseData(enterData);
      
      setTitle('');
      setAmount('');
      setDate('');
    }

  return (
    <form onSubmit={setHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChanged}></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value={enteredAmount} onChange={amountChanged}></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={enteredDate} onChange={dateChanged}></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type='button' onClick={props.onCancel}>Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
