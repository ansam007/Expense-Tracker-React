import "../css/ExpenseForm.css";

const ExpenseForm = () => {

    function titleChanged (event){
        console.log(event.target.value);
    }
    function amountChanged (event){
        console.log(event.target.value);
    }
    function dateChanged (event){
        console.log(event.target.value);
    }

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChanged}></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" onChange={amountChanged}></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" onChange={dateChanged}></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
