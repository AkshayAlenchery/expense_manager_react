import React, { useReducer, createContext } from 'react'
import ExpenseReducer from './expenseReducer'
import { CREDIT_AMOUNT, DEBIT_AMOUNT, DELETE_CREDIT, DELETE_DEBIT } from './actionTypes'

export const ExpenseContext = createContext()

export const ExpenseProvider = props => {
  const initialState = {
    balance: 0,
    spend: 0,
    expensesHistory: []
  }

  const [expenseState, dispatch] = useReducer(ExpenseReducer, initialState)

  const addExpense = expense => {
    expense.id = expenseState.expensesHistory.length
      ? expenseState.expensesHistory[expenseState.expensesHistory.length - 1].id + 1
      : 1
    expense.amount = Number(expense.amount)
    expense.type = Number(expense.type)
    const payload = {}
    payload.expense = expense
    if (expense.type === 1) {
      payload.type = CREDIT_AMOUNT
      payload.balance = expenseState.balance + expense.amount
    } else {
      payload.type = DEBIT_AMOUNT
      payload.balance = expenseState.balance - expense.amount
      payload.spend = expenseState.spend + expense.amount
    }
    dispatch(payload)
  }

  const deleteExpense = expId => {
    const expense = expenseState.expensesHistory.filter(expense => expense.id === expId)[0]
    const payload = {}
    payload.expId = expId
    if (expense.type === 1) {
      payload.type = DELETE_CREDIT
      payload.balance = expenseState.balance - expense.amount
    } else {
      payload.type = DELETE_DEBIT
      payload.balance = expenseState.balance + expense.amount
      payload.spend = expenseState.spend - expense.amount
    }
    dispatch(payload)
  }

  return (
    <ExpenseContext.Provider value={{ expenseState, addExpense, deleteExpense }}>
      {props.children}
    </ExpenseContext.Provider>
  )
}
