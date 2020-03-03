import { CREDIT_AMOUNT, DEBIT_AMOUNT, DELETE_DEBIT, DELETE_CREDIT } from './actionTypes'

export default (state, action) => {
  switch (action.type) {
    case CREDIT_AMOUNT:
      return Object.assign({}, state, {
        balance: action.balance,
        expensesHistory: [...state.expensesHistory, action.expense]
      })
    case DEBIT_AMOUNT:
      return Object.assign({}, state, {
        balance: action.balance,
        spend: action.spend,
        expensesHistory: [...state.expensesHistory, action.expense]
      })
    case DELETE_DEBIT:
      return Object.assign({}, state, {
        balance: action.balance,
        spend: action.spend,
        expensesHistory: state.expensesHistory.filter(exp => exp.id !== action.expId)
      })
    case DELETE_CREDIT:
      return Object.assign({}, state, {
        balance: action.balance,
        expensesHistory: state.expensesHistory.filter(exp => exp.id !== action.expId)
      })
    default:
      return state
  }
}
