import React from 'react'
import './App.css'
import ExpenseAdd from './components/ExpenseAdd'
import ExpenseInfo from './components/ExpenseInfo'
import ExpenseList from './components/ExpenseList'
import { ExpenseProvider } from './context/ExpenseContext'

function App() {
  return (
    <div className='App'>
      <ExpenseProvider>
        <ExpenseInfo />
        <ExpenseAdd />
        <ExpenseList />
      </ExpenseProvider>
    </div>
  )
}

export default App
