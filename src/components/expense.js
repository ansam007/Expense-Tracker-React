import './Expense.css';

function Expenses() {
    const expenseItem = 'Car Insurance';
    const expenseDate = new Date();
    const expenseCost = 30000;

    return (
        <div className="expense-item">
            <div>{expenseDate.toISOString()}</div>
            <div className="expense-item__description">
            <h2>{expenseItem}</h2>
                <div className="expense-item__price">Rs.{expenseCost}</div>
            </div>   
        </div>
    )
}

export default Expenses;