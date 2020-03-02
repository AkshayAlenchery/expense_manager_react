import React, { createContext, useReducer } from 'react'
import ExpenseReducer from './reducers'

export const ExpenseContext = createContext()

export const ExpenseProvider = props => {
  const initialState = {
    balance: 14980,
    spend: 20,
    expenses: {
      2019: {
        12: {
          10: [
            {
              amount: 20,
              type: 1,
              note: 'Bought soap'
            },
            {
              amount: 15000,
              type: 2,
              note: 'Got salary'
            }
          ]
        }
      }
    }
  }
  const [expenses, dispatch] = useReducer(ExpenseReducer, initialState)

  return <ExpenseContext.Provider value={expenses}>{props.children}</ExpenseContext.Provider>
}
