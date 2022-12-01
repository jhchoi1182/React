import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const INITIAL_EXPENSES = [{
  id: 'e1',
  title: '휴지',
  amount: 3000,
  date: new Date(2020, 7, 14),
},
{
  id: 'e2',
  title: 'TV',
  amount: 800000,
  date: new Date(2020, 2, 22),
},
{
  id: 'e3',
  title: '자동차 보험료',
  amount: 26000,
  date: new Date(2021, 7, 14),
},
{
  id: 'e4',
  title: '책상',
  amount: 50000,
  date: new Date(2020, 6, 14),
}]

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES)

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
