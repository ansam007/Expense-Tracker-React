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
      <Expenses title={expenses[0].item} amount={expenses[0].cost} place={expenses[0].place} date={expenses[0].date}></Expenses>
      <Expenses title={expenses[1].item} amount={expenses[1].cost} place={expenses[1].place} date={expenses[1].date}></Expenses>
      <Expenses title={expenses[2].item} amount={expenses[2].cost} place={expenses[2].place} date={expenses[2].date}></Expenses>
      <Expenses title={expenses[3].item} amount={expenses[3].cost} place={expenses[3].place} date={expenses[3].date}></Expenses>
      <Expenses title={expenses[4].item} amount={expenses[4].cost} place={expenses[4].place} date={expenses[4].date}></Expenses>
    </div>
  );
}

export default App;
