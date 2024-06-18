import React, { useState } from "react";
import { FaPlus } from 'react-icons/fa'; // Import the plus icon from react-icons



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
      <div className="type-buttons" id="e1">
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
        id="e2"
        type="text"
        value={newTask.name}
        onChange={handleInputChange}
        placeholder={placeholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <button className={`add-button ${window.innerWidth > 899 ? "" : "min"}`} id="e3" onClick={addTask}>
      {window.innerWidth > 899 ? "Add" : <FaPlus />}
      </button>
    </div>
  );
}

export default AddTask;
