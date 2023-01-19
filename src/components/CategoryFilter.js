import React from "react";

function CategoryFilter({categories, onFilter}) {
  const buttons = categories.map((category, index) => {
    return <button key={index} onClick={() => onFilter(category)} className={category}>{category}</button>
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
