import React from "react";
import "./TodoSearch.css";
import { FiSearch } from "react-icons/fi";

function TodoSearch({ searchValue, setSearchValue }) {
  return (
    <div className="searchContainer">
      <input
        id="taskInput"
        placeholder="Search for a task"
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      />
        <FiSearch size={24} className="searchIcon" />
    </div>
  );
}

export { TodoSearch };
