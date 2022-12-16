import React from "react";
import { useTodos } from "./useTodos";
import { TodoHeader } from "../todoHeader";
import { TodoCounter } from "../todoCounter";
import { TodoSearch } from "../todoSearch";
import { TodoList } from "../todoList";
import { TodoItem } from "../todoItem";
import { TodoForm } from "../todoForm";
import { CreateTodoButton } from "../createTodoButton";
import { LoadingAnimation } from "../LoadingAnimation";
import { ErrorAnimation } from "../errorAnimation";
import { EmptyTodos } from "../emptyTodos";
import { EmptySearchResults } from "../emptySearchResults";
import { Modal } from "../modal";
import "./App.css";

function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo,
  } = useTodos();
  return (
    <div className="container">
      <TodoHeader>
        <h1 className="tasklogo">
          <img
            src="https://res.cloudinary.com/df8ow6m3o/image/upload/v1670708300/others/1_me0qas.png"
            alt="todo logo"
          />
          Task Manager
        </h1>
        <TodoCounter
          loading={loading}
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <TodoSearch
          loading={loading}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TodoHeader>
      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchText={searchValue}
        onError={() => <ErrorAnimation />}
        onLoading={() => <LoadingAnimation />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResults={(searchText) => (
          <EmptySearchResults searchText={searchText} />
        )}
        render={(todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      />
      {!!openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}
      <CreateTodoButton setOpenModal={setOpenModal} />
    </div>
  );
}

export default App;
