import React, { useReducer, createContext } from 'react';
import contextReducer from './contextReducer';


const initialState = []; // No transactions at start.

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);

  // Actions = Action Creators
  // Function that will happen once a transaction is deleted.
  const deleteTransaction = (id) => {
    dispatch({type: 'DELETE_TRANSACTION', payload: id});
  }

  const addTransaction = (transaction) => {
    dispatch({type: 'ADD_TRANSACTION', payload: transaction });
  }


  return (
    <ExpenseTrackerContext.Provider value={{
      deleteTransaction, addTransaction, transactions
     }}>
      {children}
    </ExpenseTrackerContext.Provider>
  );
}

// Context > Redux
