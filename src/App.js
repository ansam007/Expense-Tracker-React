import './App.css';
import Expenses from './components/expense';

function App() {
  const expenses = [
    {
      item: 'Groceries',
      cost: 50.00,
      place: 'Local Supermarket',
      date: '2023-01-05'
    },
    {
      item: 'Dinner',
      cost: 30.00,
      place: 'Restaurant XYZ',
      date: '2023-02-12'
    },
    {
      item: 'Gasoline',
      cost: 40.00,
      place: 'Gas Station ABC',
      date: '2023-03-20'
    },
    {
      item: 'Movie Tickets',
      cost: 25.00,
      place: 'Cinema City',
      date: '2023-04-15'
    },
    {
      item: 'Clothing',
      cost: 60.00,
      place: 'Fashion Store',
      date: '2023-05-02'
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
