import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [tasks, setTasks] = useState(TASKS);
  const [categories, setCategories] = useState(CATEGORIES);

  const filterCategories = (category) => {
    setTasks(() => {
      if(category === "All") return TASKS
      const selectedTasks = tasks.filter((task) => task.category === category);
      return selectedTasks;
    });
  }

  const updateTasks = (text) => {
    const updatedTasks = [...tasks, text];
    setTasks(updatedTasks);
  }

  const removeTasks = (index) => {
    tasks.splice(index, 1);
    const updatedTasks = [...tasks];
    setTasks(() => {return updatedTasks});
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categories} onFilter={filterCategories}/>
      <NewTaskForm categories={categories} onTaskFormSubmit={updateTasks}/>
      <TaskList tasks={tasks} onRemove={removeTasks}/>
    </div>
  );
}

export default App;
