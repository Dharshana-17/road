import React, { useState } from 'react';

const ExpenseCalculator = () => {
  const [expenses, setExpenses] = useState([]);
  const [totalExpense, setTotalExpense] = useState(0);
  const [expenseType, setExpenseType] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');

  const addExpense = (event) => {
    event.preventDefault();
    const amount = parseFloat(expenseAmount);
    if (!isNaN(amount) && expenseType.trim() !== '') {
      setExpenses([...expenses, { type: expenseType, amount }]);
      setTotalExpense(totalExpense + amount);
      setExpenseType('');
      setExpenseAmount('');
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h2 style={{ marginBottom: '10px' }}>Expense Calculator</h2>
      <form onSubmit={addExpense} style={{ marginBottom: '20px' }}>
        <label htmlFor="expenseType" style={{ marginRight: '10px' }}>Expense Type:</label>
        <input type="text" id="expenseType" value={expenseType} onChange={(e) => setExpenseType(e.target.value)} style={{ marginRight: '10px' }} />
        <label htmlFor="expenseAmount" style={{ marginRight: '10px' }}>Expense Amount:</label>
        <input type="number" id="expenseAmount" value={expenseAmount} onChange={(e) => setExpenseAmount(e.target.value)} style={{ marginRight: '10px' }} />
        <button type="submit">Add Expense</button>
      </form>
      <h3 style={{ marginBottom: '10px' }}>Expenses:</h3>
      <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
        {expenses.map((expense, index) => (
          <li key={index}>{expense.type}: Rs.{expense.amount.toFixed(2)}</li>
        ))}
      </ul>
      <h3>Total Expense: Rs.{totalExpense.toFixed(2)}</h3>
    </div>
  );
};

export default ExpenseCalculator;
