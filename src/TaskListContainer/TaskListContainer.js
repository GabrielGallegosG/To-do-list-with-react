import React from "react";
import "./TaskListContainer.css";
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { TasksLoading } from "../TasksLoading/TasksLoading";
import { TasksError } from "../TasksError/TasksError";
import { EmptyTasks } from "../EmptyTasks/EmptyTasks";
import { TodoItem } from "../TodoItem/TodoItem";
import { ToDoContext } from "../ToDoContext/ToDoContext";

const TaskListContainer = () => {
  const { loading, error, searchedTasks, completeTask, deleteTask } =
    React.useContext(ToDoContext);

  const taskListStyle = {
    maxHeight: "100%",
    overflowY: "auto",
  };

  return (
    <div className="container">
      <span className="title">Task List</span>
      <TodoCounter />
      <TodoSearch />

      <div className="task-list" style={taskListStyle}>
        {loading && <TasksLoading />}
        {error && <TasksError />}
        {!loading && searchedTasks.length === 0 && <EmptyTasks />}
        {searchedTasks.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTask(todo.text)}
            onDelete={() => deleteTask(todo.text)}
          />
        ))}
      </div>
    </div>
  );
};

export { TaskListContainer };
