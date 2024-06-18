import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaRegStar, FaStar } from "react-icons/fa";

function TaskList({ tasks, toggleStar, deleteTask, completeTask }) {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id} className="task-list-item">
          <div className={`task-type ${task.istype.toLowerCase()}`} />
          <span className="task-text">{task.name}</span>
          <input
            type="checkbox"
            name="task-select"
            id={`task-select-${task.id}`}
            className="task-select"
            onClick={() => completeTask(task.id)}
            checked={task.iscompleted}
          />
          <button className="star-button" onClick={() => toggleStar(task.id)}>
            {task.isstarred ? (
              <FaStar className="icon-star" />
            ) : (
              <FaRegStar className="icon-star" />
            )}
          </button>
          <button className="delete-button" onClick={() => deleteTask(task.id)}>
            <MdDeleteForever className="icon-del" />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
