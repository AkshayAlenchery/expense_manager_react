import React, { useContext } from 'react'
import { ExpenseContext } from '../context/expenseContext'
import Expense from './expense'
import './expenses.css'

const ListExpenses = () => {
  const { expenseState } = useContext(ExpenseContext)
  const expenseList = expenseState.expensesHistory

  return (
    <div id='exp-container'>
      {expenseList.length ? (
        expenseList.map(expense => <Expense expense={expense} key={expense.id} />)
      ) : (
        <p className='text-center'> No expenses to show</p>
      )}
    </div>
  )
}

export default ListExpenses
