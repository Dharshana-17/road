import React, { useState } from 'react';

const ExpenseCalculator = () => {
  // State to hold individual expense values
  const [expenses, setExpenses] = useState([]);
  // State to hold the total expense
  const [totalExpense, setTotalExpense] = useState(0);

  // Function to handle adding a new expense
  const addExpense = (event) => {
    event.preventDefault();
    const expenseValue = parseFloat(event.target.elements.expense.value);
    if (!isNaN(expenseValue)) {
      setExpenses([...expenses, expenseValue]);
      setTotalExpense(totalExpense + expenseValue);
      event.target.reset();
    }
  };

  return (
    <div>
      <h2>Expense Calculator</h2>
      <form onSubmit={addExpense}>
        <label htmlFor="expense">Enter Expense:</label>
        <input type="number" id="expense" />
        <button type="submit">Add Expense</button>
      </form>
      <h3>Expenses:</h3>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>${expense.toFixed(2)}</li>
        ))}
      </ul>
      <h3>Total Expense: ${totalExpense.toFixed(2)}</h3>
    </div>
  );
};

export default ExpenseCalculator;
