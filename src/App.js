import './App.css';
import React,{useState} from 'react';
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES= [ 
  {
  id: 'e1',
  title: 'Harry Potter and the Deathly Hallows',
  date: new Date (2022 , 3 , 25),
  amount: 168
},
{
id: 'e2',
title: 'Harry Potter and the Half Blood Prince',
date: new Date (2021 , 6 , 22),
amount: 152
},
{
id: 'e3',
title: 'Harry Potter and the Goblet of fire',
date: new Date (2020 , 3 , 25),
amount: 170
},
{
id: 'e4',
title: 'Harry Potter and the Prisoner of Azkaban',
date: new Date (2021 , 7 , 16),
amount: 168
},
];


function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
      setExpenses((prevExpenses) => {
          return [expense, ...prevExpenses];
      });
  };

  return (
      <div>
          <NewExpense onAddExpense={addExpenseHandler} />
          <Expenses items={expenses} />
      </div>
  );
}
export default App;