import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  }
  const startEditHandler = () => {
    setEditing(true);
  }
  const stopEditHandler = () => {
    setEditing(false);
  }
  return <div className="new-expense">
    {!isEditing && (<button onClick={startEditHandler}>Add New Expense</button>)}
    {isEditing && (<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditHandler}/>)}
    
  </div>;
};

export default NewExpense;
