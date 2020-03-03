import React, { useContext } from 'react'
import { ExpenseContext } from '../context/expenseContext'
import './monthInfo.css'

const MonthInfo = () => {
  const { expenseState } = useContext(ExpenseContext)

  return (
    <div id='info-box'>
      <div>
        <h4>{expenseState.balance.toLocaleString('en-IN')}</h4>
        <p>BALANCE</p>
      </div>
      <div>
        <h4>{expenseState.spend.toLocaleString('en-IN')}</h4>
        <p>EXPENSES</p>
      </div>
    </div>
  )
}

export default MonthInfo
