import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { v4 as uuidv4 } from "uuid";

function AddExpenseForm() {
  const { dispatch } = useContext(AppContext);

  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const expense = {
      id: uuidv4(),
      name,
      cost: parseInt(cost),
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">Name </label>
          <input
            required
            type="text"
            id="cost"
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>

        <div>
          <label htmlFor="name">Cost </label>
          <input
            required
            type="text"
            id="cost"
            onChange={(e) => setCost(e.target.value)}
          ></input>
        </div>

        <button type="submit">Save</button>
      </form>
    </>
  );
}

export default AddExpenseForm;
