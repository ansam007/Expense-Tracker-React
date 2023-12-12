import './components/App/App.css';
import Expenses from './components/Expense/expense.js';

function App() {
  
  const expenses = [
    {
      item: 'Groceries',
      cost: 50.00,
      place: 'Local Supermarket',
      date: new Date(2023,1,5),
    },
    {
      item: 'Dinner',
      cost: 30.00,
      place: 'Restaurant XYZ',
      date: new Date(2023,2,12),
    },
    {
      item: 'Gasoline',
      cost: 40.00,
      place: 'Gas Station ABC',
      date: new Date(2023,3,20),
    },
    {
      item: 'Movie Tickets',
      cost: 25.00,
      place: 'Cinema City',
      date: new Date(2023,4,15),
    },
    {
      item: 'Clothing',
      cost: 60.00,
      place: 'Fashion Store',
      date: new Date(2023,5,2),
    }
  ];

  return (
    <div>
      <h2>Expense Items</h2>
      {expenses.map((expense, index) => (
        <Expenses
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
