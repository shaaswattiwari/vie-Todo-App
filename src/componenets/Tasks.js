import React, { useContext } from "react";
import States from "../context/States";
import "./tasks.css";

function Tasks() {
  const { state, dispatch } = useContext(States);
  const editButtonHandler = (e) => {
    dispatch({
      type: "inputChange",
      payload:
        e.target.parentNode.parentNode.parentNode.childNodes[0].innerText,
    });
    dispatch({
      type: "elementEdit",
      payload: e.target.parentNode.parentNode.parentNode.id,
    });
    dispatch({ type: "editMode", payload: true });
  };
  const deleteButtonHandler = (e) => {
    var newArr = JSON.parse(localStorage.getItem("tasks")).filter((task) => {
      return !(
        Number(task.id) === Number(e.target.parentNode.parentNode.parentNode.id)
      );
    });

    localStorage.setItem("tasks", JSON.stringify(newArr));
    dispatch({ type: "deleteTask", payload: true });
  };
  if (state.taskItems) {
    var mapTasks = state.taskItems.map((task) => {
      return (
        <div className="taskdiv" id={task.id} key={Math.random()}>
          <div className="tasktext">{task.task}</div>
          <div className="taskbuttons">
            <button onClick={editButtonHandler}>
              <img src="https://img.icons8.com/glyph-neue/50/000000/edit.png" />
            </button>
            <button onClick={deleteButtonHandler}>
              <img src="https://img.icons8.com/ios-glyphs/60/000000/delete-sign.png" />
            </button>
          </div>
        </div>
      );
    });
  }

  return (
    <div className="taskarea">
      {state.taskItems.length ? (
        mapTasks.reverse()
      ) : (
        <div className="default">Hey, start writing your tasks.</div>
      )}
    </div>
  );
}

export default Tasks;
