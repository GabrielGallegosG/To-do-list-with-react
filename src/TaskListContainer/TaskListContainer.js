import React from "react";
import "./TaskListContainer.css";
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { TodoList } from "../TodoList/TodoList";
import { TasksLoading } from "../TasksLoading/TasksLoading";
import { TasksError } from "../TasksError/TasksError";
import { EmptyTasks } from "../EmptyTasks/EmptyTasks";
import { TodoItem } from "../TodoItem/TodoItem";
import { ToDoContext } from "../ToDoContext/ToDoContext";

const TaskListContainer = () => {
  const { loading, error, searchedTasks, completeTask, deleteTask } =
    React.useContext(ToDoContext);
  return (
    <div className="container">
      <span className="title">Task List</span>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
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
      </TodoList>
    </div>
  );
};

export { TaskListContainer };
