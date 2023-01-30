import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Budget() {
  const { budget } = useContext(AppContext);
  return (
    <>
      <div>
        <h1>Budget: ${budget}</h1>
      </div>
    </>
  );
}

export default Budget;
