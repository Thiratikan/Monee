import React from "react";
import { Budget } from "../styles/ExpenseFormStyle";

function ExpenseItem(props) {
  return (
    <Budget>
      <li>
        <div>
          <h2>{props.name}</h2>
          <h3>${props.cost}</h3>
        </div>
      </li>
    </Budget>
  );
}

export default ExpenseItem;
