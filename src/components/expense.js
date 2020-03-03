import React, { useContext } from 'react'
import './expenses.css'
import { ExpenseContext } from '../context/expenseContext'

const Expense = props => {
  const expense = props.expense
  const { deleteExpense } = useContext(ExpenseContext)
  const [yy, mm, dd] = expense.date.split('-')
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ]

  return (
    <div className='expense-row'>
      <div className='date-group'>
        <h4>
          {dd} {months[mm - 1]}
        </h4>
        <p>{yy}</p>
      </div>
      <div className='info-group'>
        <h4 className={expense.type === 1 ? 'green' : 'red'}>
          {expense.type === 1 ? '+' : '-'} &#8377; {expense.amount.toLocaleString('en-IN')}
        </h4>
        <p>{expense.note}</p>
      </div>
      <div className='del-exp'>
        <p onClick={() => deleteExpense(expense.id)}>x</p>
      </div>
    </div>
  )
}

export default Expense
