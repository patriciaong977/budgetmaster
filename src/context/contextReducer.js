// Reducer - a function that takes in the old state, and an action. Returns a new state.
  // Two parameters: Old state and Action.

const contextReducer = (state, action) => {
  let transactions; // Lets you reassign transactions in the switch case delete and add.

  // Switch case for Delete and Add transactions
  switch (action.type) {
    case 'DELETE_TRANSACTION':
      transactions = state.filter((t) => t.id !== action.payload); // Keep all other transactions, except the one specified for payload
      return transactions;
    case 'ADD_TRANSACTION':
      transactions = [action.payload, ...state]
      return transactions;

    default:
      return state;
  }

}

export default contextReducer;
