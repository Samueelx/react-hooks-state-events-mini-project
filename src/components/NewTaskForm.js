import React, { useState } from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {

  const [task, setTask] = useState("");
  const [selection, setSelection] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const taskObject = {
      text: task,
      category: selection
    };

    onTaskFormSubmit(taskObject);
  }

  const handleDetails = (e) => {
    setTask(e.target.value);
  }
  const handleSelect = (e) => {
    setSelection(e.target.value);
  }

  const options = categories.slice(1).map((opt, index) => {
    return <option key={index} value={opt}>{opt}</option>
  });

  return (
    <form className="new-task-form" onSubmit={handleOnSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleDetails}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleSelect}>
          {/* render <option> elements for each category here */}
          {options}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
