import React from "react";
import "./todoCounter.css";
import { TodoContext } from "../todoContext";

function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);
  return (
    <h2 className="todoCounter">
      Has completado {completedTodos} de {totalTodos} Tareas
    </h2>
  );
}

export { TodoCounter };
