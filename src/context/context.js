import React, { useReducer, createContext } from 'react';
import contextReducer from './contextReducer';

// Define a couple of items at the start of the initialState
const initialState = JSON.parse(localStorage.getItem('transactions')) ||
  [{ "amount": 100, "category": "Clothes", "type": "Expense", "date": "2022-04-23T20:36:50.294Z", "id": "63ad6e58-ba95-4402-b93e-c20af88bdbf3" },
    { "amount": 35, "category": "Food", "type": "Expense", "date": "2022-04-23T20:36:50.294Z", "id": "72a5a5f1-de7e-47ba-ad01-cfdd859a8575" },
    { "amount": 500, "category": "Business", "type": "Income", "date": "2022-04-21", "id": "aab215a0-d874-40b0-9580-5e5513299459" },
    { "amount": 1200, "category": "Salary", "type": "Income", "date": "2022-04-20", "id": "5a3955bc-6b83-4e25-be36-0d8107b6d220" }];


export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);

  // Actions = Action Creators
  // Function that will happen once a transaction is deleted.
  const deleteTransaction = (id) => {
    dispatch({ type: 'DELETE_TRANSACTION', payload: id });
  }

  const addTransaction = (transaction) => {
    dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
  }

  // Total Balance use Reduce().
  const balance = transactions.reduce((acc, currVal) => {
    return(currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount)
  }, 0);


  return (
    <ExpenseTrackerContext.Provider value={{
      deleteTransaction,
      addTransaction,
      transactions,
      balance
    }}>
      {children}
    </ExpenseTrackerContext.Provider>
  );
}

// Context > Redux
