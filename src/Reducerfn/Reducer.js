const reducer = (prev, action) => {
  if (action.type === "inputChange") {
    return { ...prev, inputState: action.payload };
  }
  if (action.type === "addTask") {
    return { ...prev, addTaskState: action.payload };
  }
  if (action.type === "editTask") {
    return { ...prev, editTask: action.payload };
  }
  if (action.type === "editMode") {
    return { ...prev, editMode: action.payload };
  }
  if (action.type === "clearTask") {
    return { ...prev, clearMode: action.payload };
  }
  if (action.type === "taskItemsLoad") {
    return { ...prev, taskItems: action.payload };
  }
  if (action.type === "deleteTask") {
    return { ...prev, deleteMode: action.payload };
  }
  if (action.type === "elementEdit") {
    return { ...prev, elementToEdit: action.payload };
  }
};

export default reducer;
