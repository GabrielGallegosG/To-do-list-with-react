import React from "react";
import "./TasksLoading.css";

const TasksLoading = () => {
  return (
    <div className="loading-container">
      <div className="loading-dots">
        <div className="dot dot-1"></div>
        <div className="dot dot-2"></div>
        <div className="dot dot-3"></div>
      </div>
      <p className="loading-text">Loading...</p>
    </div>
  );
};

export { TasksLoading };
