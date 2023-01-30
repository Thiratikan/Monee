import React from "react";
import Budget from "./Budget";
import Remaining from "./Remaining";
import Spending from "./Spending";
import ExpenseList from "./ExpenseList";
import AddExpenseForm from "./AddExpenseForm";
import { Form } from "../styles/ExpenseFormStyle";
import { AppProvider } from "../context/AppContext";

function Planner() {
  return (
    <AppProvider>
      <Form>
        <h1>Budget Planner</h1>
        <Budget />
        <Remaining />
        <Spending />
        <h2>Expenses</h2>
        <ExpenseList />
        <h2>Add Expense</h2>
        <AddExpenseForm />
      </Form>
    </AppProvider>
  );
}

export default Planner;
