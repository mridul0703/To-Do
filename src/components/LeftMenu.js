import React from "react";
import { FaBars } from "react-icons/fa";

function LeftMenu({
  displayPersonalTasks,
  displayOfficeTasks,
  displayCompletedTasks,
  displayStarredTasks,
  displayAllTasks,
  filteredTasks,
  tasks,
  toggleMenu,
  isMenuOpen,
}) {
  return (
    <div className={`leftmenu ${isMenuOpen ? 'open' : 'min'}`}>
      <div className="profile">
        <h1>Hi, username</h1>
        <div className="progress-bar">
          <div
            className="progess-bar-width"
            style={{ width: `${(filteredTasks.filter(task => task.iscompleted).length / tasks.length) * 100}%` }}
          ></div>
        </div>
      </div>
      <div className="list-topics">
        <div className="task-bg" onClick={displayPersonalTasks}>
          <h3>Personal</h3>
          <div className={`task-type personal small-type`} />
        </div>
        <div className="task-bg" onClick={displayOfficeTasks}>
          <h3>Office</h3>
          <div className={`task-type office small-type`} />
        </div>
        <div className="task-bg" onClick={displayCompletedTasks}>
          <h3>Completed</h3>
          <div className={`task-type completed small-type`}>
          </div>
        </div>
        <div className="task-bg" onClick={displayStarredTasks}>
          <h3>Starred</h3>
          <div className={`task-type starred small-type`} />
        </div>
        <div className="task-bg" onClick={displayAllTasks}>
          <h3>All</h3>
          <div className={`task-type all small-type`} />
        </div>
      </div>
    </div>
  );
}

export default LeftMenu;
