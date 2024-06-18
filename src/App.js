import React, { useState } from "react";
import LeftMenu from "./components/LeftMenu";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Alarm", isstarred: false, iscompleted: true, istype: "Personal" },
    { id: 2, name: "Breakfast", isstarred: true, iscompleted: false, istype: "Personal" },
    { id: 3, name: "Lunch", isstarred: true, iscompleted: false, istype: "Office" },
  ]);

  const [newTask, setNewTask] = useState({
    name: "",
    isstarred: false,
    iscompleted: false,
    istype: "",
  });

  const [filter, setFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleInputChange = (event) => {
    setNewTask({ ...newTask, name: event.target.value });
  };

  const handleTypeChange = (event) => {
    setNewTask({ ...newTask, istype: event.target.value });
  };

  const addTask = () => {
    if (newTask.name.trim() !== "") {
      setTasks([...tasks, { ...newTask, id: tasks.length + 1 }]);
      setNewTask({ name: "", isstarred: false, iscompleted: false, istype: "" });
    }
  };

  const toggleStar = (id) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, isstarred: !task.isstarred } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const completeTask = (id) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, iscompleted: !task.iscompleted } : task
    );
    setTasks(updatedTasks);
  };

  const displayCompletedTasks = () => {
    setFilter("completed");
    setTypeFilter("all");
  };

  const displayStarredTasks = () => {
    setFilter("starred");
    setTypeFilter("all");
  };

  const displayPersonalTasks = () => {
    setTypeFilter("Personal");
    setFilter("all");
  };

  const displayOfficeTasks = () => {
    setTypeFilter("Office");
    setFilter("all");
  };

  const displayAllTasks = () => {
    setTypeFilter("all");
    setFilter("all");
  };

  const filteredTasks = tasks.filter(task => {
    if (typeFilter !== "all" && task.istype !== typeFilter) {
      return false;
    }
    if (filter === "completed") {
      return task.iscompleted;
    }
    if (filter === "starred") {
      return task.isstarred;
    }
    return true;
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="main">
      <div className={`main-container ${isMenuOpen ? 'menu-open' : ''}`}>
        <LeftMenu
          displayPersonalTasks={displayPersonalTasks}
          displayOfficeTasks={displayOfficeTasks}
          displayCompletedTasks={displayCompletedTasks}
          displayStarredTasks={displayStarredTasks}
          displayAllTasks={displayAllTasks}
          filteredTasks={filteredTasks}
          tasks={tasks}
          toggleMenu={toggleMenu}
          isMenuOpen={isMenuOpen}
        />
        <div className="lists">
          <div className="list-header">
            <h1>To-Do's</h1>
            <h3>Your Today's Tasks</h3>
          </div>
          <div className="display-list">
            <AddTask
              newTask={newTask}
              handleInputChange={handleInputChange}
              handleTypeChange={handleTypeChange}
              addTask={addTask}
            />
            <TaskList
              tasks={filteredTasks}
              toggleStar={toggleStar}
              deleteTask={deleteTask}
              completeTask={completeTask}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
