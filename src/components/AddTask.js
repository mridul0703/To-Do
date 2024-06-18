import React, { useState } from "react";

function AddTask({ newTask, handleInputChange, handleTypeChange, addTask }) {
  const [placeholder, setPlaceholder] = useState("Enter New Task");

  const handleFocus = () => {
    setPlaceholder("");
  };

  const handleBlur = () => {
    setPlaceholder("Enter New Task");
  };

  return (
    <div className="add-task">
      <div>
        <input
          type="radio"
          value="Personal"
          className="task-personal"
          checked={newTask.istype === "Personal"}
          onChange={handleTypeChange}
        />
        <input
          type="radio"
          value="Office"
          className="task-office"
          checked={newTask.istype === "Office"}
          onChange={handleTypeChange}
        />
      </div>
      <input
        className="input-task"
        type="text"
        value={newTask.name}
        onChange={handleInputChange}
        placeholder={placeholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <button className="add-button" onClick={addTask}>
        Add
      </button>
    </div>
  );
}

export default AddTask;
