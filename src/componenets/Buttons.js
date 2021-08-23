import React, { useContext } from "react";
import States from "../context/States";
import "./buttons.css";

function Buttons() {
  const { state, dispatch } = useContext(States);
  const addButtonHandler = () => {
    if (state.inputState.trim()) {
      dispatch({ type: "addTask", payload: true });
    } else {
      console.log("enter something");
    }
  };
  const editButtonHandler = () => {
    if (state.inputState.trim()) {
      dispatch({ type: "editTask", payload: true });
    } else {
      console.log("enter something");
    }
  };
  const clearButtonHandler = () => {
    localStorage.setItem("tasks", JSON.stringify([]));
    dispatch({ type: "clearTask", payload: true });
  };
  return (
    <div className="buttons">
      {!state.editMode && <button onClick={addButtonHandler}>Add</button>}
      {state.editMode && <button onClick={editButtonHandler}>Edit</button>}
      <button onClick={clearButtonHandler}>Clear</button>
    </div>
  );
}

export default Buttons;
