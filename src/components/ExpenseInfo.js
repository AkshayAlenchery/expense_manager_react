import React, { useContext } from 'react'
import { ExpenseContext } from '../context/ExpenseContext'

const ExprenseInfo = () => {
  const { expenses } = useContext(ExpenseContext)
  console.log(expenses)
  return (
    <div>
      <h1>ExpenseInfo</h1>
    </div>
  )
}

export default ExprenseInfo
