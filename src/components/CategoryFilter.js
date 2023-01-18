import React from "react";

function CategoryFilter({categories, onFilter}) {
  function handleOnClick(e) {
    e.target.className = "selected";
    onFilter(e.target.innerText);
  }

  const buttons = categories.map((category, index) => {
    return <button key={index} onClick={handleOnClick}>{category}</button>
  });

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {buttons}
    </div>
  );
}

export default CategoryFilter;
