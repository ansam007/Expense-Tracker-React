import './Expense.css';
function Expenses() {
    return (
        <div className="expense-item">
            <div>March 28th 2021</div>
            <div className="expense-item__description">
            <h2 className="expense-item h2">Car Insurance</h2>
                <div className="expense-item__price">Rs.30000</div>
            </div>   
        </div>
    )
}

export default Expenses;