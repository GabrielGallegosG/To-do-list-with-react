import React from "react";
import { ToDoProvider } from "../ToDoContext/ToDoContext";
import { AppUI } from "./AppUI";

// const defaultTodos = [
//   { text: "Tomar el curso de React.js", completed: false },
//   { text: "Sacar a pasear al perro", completed: false },
//   { text: "Terminar el proyecto de React", completed: false },
//   { text: "Crear un perfil de LinkedIn", completed: false },
// ];

function App() {
  return (
    <ToDoProvider>
      <AppUI />
    </ToDoProvider>
  );
}

export default App;
