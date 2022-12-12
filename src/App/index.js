import React from "react";
import { TodoCounter } from "../todoCounter";
import { TodoSearch } from "../todoSearch";
import { TodoList } from "../todoList";
import { TodoItem } from "../todoItem";
import { CreateTodoButton } from "../createTodoButton";
import "./App.css";

const defaultTodos = [
  { text: "Cortar cebolla", completed: false },
  { text: "Cortar Zanahoria", completed: false },
  { text: "Preparar Almuerzo", completed: true },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }
  const completeTodos = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };
  return (
    <div className="container">
      <h1 className="tasklogo">
        <img
          src="https://res.cloudinary.com/df8ow6m3o/image/upload/v1670708300/others/1_me0qas.png"
          alt="todo logo"
        />
        Task Manager
      </h1>
      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodos(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </div>
  );
}

export default App;
