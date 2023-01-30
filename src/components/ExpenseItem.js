import React from "react";

function ExpenseItem(props) {
  return (
    <>
      <li>
        {props.name}
        <div>
          <span>${props.cost}</span>
        </div>
      </li>
    </>
  );
}

export default ExpenseItem;
