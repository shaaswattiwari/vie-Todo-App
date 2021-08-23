import "./App.css";
import React, { useEffect, useReducer } from "react";
import Input from "./componenets/Input";
import Buttons from "./componenets/Buttons";
import Tasks from "./componenets/Tasks";
import States from "./context/States";
import reducer from "./Reducerfn/Reducer";

var initialTime = false;

function App() {
  const initialState = {
    inputState: "",
    addTaskState: null,
    taskItems: localStorage.getItem("tasks")
      ? JSON.parse(localStorage.getItem("tasks"))
      : [],
    editMode: null,
    editTask: null,
    clearMode: null,
    deleteMode: null,
    elementToEdit: null,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (initialTime) {
      if (state.editTask) {
        var editArr = JSON.parse(localStorage.getItem("tasks")).map((task) => {
          if (!(Number(task.id) === Number(state.elementToEdit))) {
            return task;
          } else {
            task.task = state.inputState;
            return task;
          }
        });
        localStorage.setItem("tasks", JSON.stringify(editArr));
        dispatch({ type: "elementEdit", payload: null });
        dispatch({ type: "editTask", payload: null });
        dispatch({ type: "editMode", payload: null });
      }

      if (state.addTaskState) {
        var arr = localStorage.getItem("tasks");
        var dataArr = arr ? JSON.parse(arr) : [];
        dataArr.push({
          task: state.inputState,
          id: Math.random() * 100,
        });
        localStorage.setItem("tasks", JSON.stringify(dataArr));
        dispatch({ type: "addTask", payload: null });
      }

      if (state.deleteMode) {
        dispatch({ type: "elementEdit", payload: null });
        dispatch({ type: "editTask", payload: null });
        dispatch({ type: "editMode", payload: null });
        dispatch({ type: "deleteTask", payload: null });
      }

      if (state.clearMode) {
        dispatch({ type: "elementEdit", payload: null });
        dispatch({ type: "editTask", payload: null });
        dispatch({ type: "editMode", payload: null });
        dispatch({ type: "clearTask", payload: null });
      }

      dispatch({ type: "inputChange", payload: "" });
      dispatch({
        type: "taskItemsLoad",
        payload: JSON.parse(localStorage.getItem("tasks")),
      });
      return (initialTime = false);
    }
    initialTime = true;
  }, [state.addTaskState, state.deleteMode, state.clearMode, state.editTask]);

  return (
    <States.Provider value={{ state, dispatch }}>
      <h1>Task-Manager</h1>
      <div className="taskapp">
        <Input />
        <Buttons />
        <Tasks />
      </div>
    </States.Provider>
  );
}

export default App;
