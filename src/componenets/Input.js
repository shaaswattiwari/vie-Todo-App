import React, { useContext } from "react";
import States from "../context/States";
import "./input.css";

function Input() {
  const { state, dispatch } = useContext(States);

  const inputChangeHandler = (e) => {
    dispatch({ type: "inputChange", payload: e.target.value });
  };

  return (
    <input
      className="input"
      onChange={inputChangeHandler}
      type="text"
      name=""
      placeholder="What's on your mind?"
      id=""
      value={state.inputState}
    />
  );
}

export default Input;
