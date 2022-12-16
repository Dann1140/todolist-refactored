import React from "react";
import "./todoSearch.css";

function TodoSearch({ searchValue, setSearchValue, loading }) {
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };
  return (
    <input
      className="todoSearch"
      onChange={onSearchValueChange}
      value={searchValue}
      placeholder="Busca tus tareas..."
      disabled={loading}
    />
  );
}

export { TodoSearch };
