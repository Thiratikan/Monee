import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Remaining() {
  const { expenses, budget } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);

  return (
    <>
      <p>Remaining ${budget - totalExpenses}</p>
    </>
  );
}

export default Remaining;
