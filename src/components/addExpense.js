import React, { useContext, useState } from 'react'
import { ExpenseContext } from '../context/expenseContext'
import './addExpense.css'

const AddExpense = () => {
  const { addExpense } = useContext(ExpenseContext)
  const [newExpense, setNewExpense] = useState({
    id: '',
    amount: '',
    type: '',
    note: '',
    date: ''
  })

  const updateAmount = event => {
    setNewExpense(Object.assign({}, newExpense, { amount: event.target.value }))
  }

  const updateType = event => {
    setNewExpense(Object.assign({}, newExpense, { type: event.target.value }))
  }

  const updateNote = event => {
    setNewExpense(Object.assign({}, newExpense, { note: event.target.value }))
  }

  const updateDate = event => {
    setNewExpense(Object.assign({}, newExpense, { date: event.target.value }))
  }

  return (
    <div id='add-exp-container'>
      <form
        id='add-exp-form'
        onSubmit={e => {
          e.preventDefault()
          addExpense(newExpense)
          setNewExpense({
            id: '',
            amount: '',
            type: '',
            note: '',
            date: ''
          })
        }}>
        <div className='flex-group'>
          <input
            type='number'
            name='amount'
            value={newExpense.amount}
            placeholder='Amount'
            required
            onChange={updateAmount}
          />
          <select name='type' value={newExpense.type} required onChange={updateType}>
            <option value='' disabled selected>
              Type
            </option>
            <option value='1'>Credit</option>
            <option value='2'>Debit</option>
          </select>
        </div>
        <textarea
          name='note'
          placeholder='Note'
          value={newExpense.note}
          required
          onChange={updateNote}></textarea>
        <div className='flex-group'>
          <input type='date' name='date' value={newExpense.date} required onChange={updateDate} />
          <input type='submit' value='Add' />
        </div>
      </form>
    </div>
  )
}

export default AddExpense
