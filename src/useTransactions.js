// Creating a hook.
// Hooks start with "use".
// Will be used to display pie charts.

import { useContext } from "react";
import { ExpenseTrackerContext } from './context/context';

import { incomeCategories, expenseCategories, resetCategories } from './constants/categories';

// Custom hook - arrow function that starts with use.
  // Accepting a parameter, title.
const useTransactions = (title) => {
  resetCategories();
  const { transactions } = useContext(ExpenseTrackerContext);
  const transactionsPerType = transactions.filter((t) => t.type === title); // Keep only t.type is = to title.

  // Reduce() - Good to use When you have an array and sum it up. Can use a foreach, but have to
  // create another variable. Accepts two parameters: accumulator and currentvalue.
  // Have to set the initial value to 0.
  const total = transactionsPerType.reduce((acc, currVal) => acc += currVal.amount, 0);
  const categories = title === 'Income' ? incomeCategories : expenseCategories;

  // To show the objects in the console log.
  console.log({ transactionsPerType, total, categories });

  transactionsPerType.forEach((t) => {
    const category = categories.find((c) => c.type === t.category);

    // Increment the amount of each specific category of the incomeCategories or expenseCategories.
    if (category) category.amount += t.amount;
  });

  // Remove categories that are < 0.
  const filteredCategories = categories.filter((sc) => sc.amount > 0);

  // Chart Data needed for Details.jsx
  const chartData = {
    datasets: [{
      data: filteredCategories.map((c) => c.amount),
      backgroundColor: filteredCategories.map((c) => c.color),
    }],
    labels: filteredCategories.map((c) => c.type),
  };

  return { filteredCategories, total, chartData };

};

export default useTransactions;
