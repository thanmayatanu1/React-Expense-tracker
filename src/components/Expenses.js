import { useState } from "react";

import "./Expenses.css";

import Card from "./Card";

import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";



const Expenses = (props) => {
  const [filteredYear, setSelectedYear] = useState("2020");

  const filterChangedHandler = selectedYear => {
    setSelectedYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          onChangeFilter={filterChangedHandler}
          selected={filteredYear}
        />
        <ExpensesChart expenses={filteredExpenses} />
      
        <ExpenseList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;