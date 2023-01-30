import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Budget() {
  const { budget } = useContext(AppContext);
  return (
    <>
      <p>Budget ${budget}</p>
    </>
  );
}

export default Budget;
