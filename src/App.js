import './components/App/App.css';
import Expenses from './components/Expense/expense.js';
import UserData from './components/userData/js/UserExpense.js'
import { useState} from 'react';
import ExpenseFilter from './components/Expense/ExpenseFilter.js';

function App() {
  
  const [expenses, setExpenses] = useState([
    {
      item: 'Groceries',
      cost: 50.00,
      place: 'Local Supermarket',
      date: new Date(2021,1,5),
    },
    {
      item: 'Dinner',
      cost: 30.00,
      place: 'Restaurant XYZ',
      date: new Date(2021,2,12),
    },
    {
      item: 'Gasoline',
      cost: 40.00,
      place: 'Gas Station ABC',
      date: new Date(2021,3,20),
    },
    {
      item: 'Movie Tickets',
      cost: 25.00,
      place: 'Cinema City',
      date: new Date(2021,4,15),
    },
    {
      item: 'Clothing',
      cost: 60.00,
      place: 'Fashion Store',
      date: new Date(2020,5,2),
    }
  ]);

  const addExpenseHandler = (data) => {
    setExpenses((prevExpenses)=>[
      ...prevExpenses, data
    ])
  }

  const [filteredYear, setFilteredYear] = useState('2021');

  const filterChangeHandler = (selectedYear) => {      
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = expenses.filter((expense)=>{                             
    return expense.date.getFullYear().toString() === filteredYear
  })


  return (
    <div>
      <UserData addExpense={addExpenseHandler}></UserData>
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpenseFilter>
      {filteredExpenses.map((expense, index) => (
        <Expenses
          key = {index}
          id={index}
          title={expense.item}
          amount={expense.cost}
          place={expense.place}
          date={expense.date}
        />
      ))}
    </div>
  );
}


export default App;
