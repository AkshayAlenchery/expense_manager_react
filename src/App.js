import React from 'react'
import './App.css'
import { ExpenseProvider } from './context/expenseContext'
import MonthInfo from './components/monthInfo'
import ListExpenses from './components/listExpense'
import AddExpense from './components/addExpense'

function App() {
  return (
    <div id='App'>
      <h2>Expense Manager</h2>
      <ExpenseProvider>
        <MonthInfo />
        <AddExpense />
        <ListExpenses />
      </ExpenseProvider>
    </div>
  )
}

export default App
