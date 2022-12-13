import React from "react";
import "./todoSearch.css";
import { TodoContext } from "../todoContext";

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };
  return (
    <input
      className="todoSearch"
      onChange={onSearchValueChange}
      value={searchValue}
      placeholder="Busca tus tareas..."
    />
  );
}

export { TodoSearch };
