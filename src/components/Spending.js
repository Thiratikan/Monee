import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Spending() {
  const { expenses } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);
  return (
    <>
      <p>Spent ${totalExpenses}</p>
    </>
  );
}

export default Spending;
