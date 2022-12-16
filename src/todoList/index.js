import React from "react";
import "./todoList.css";
function TodoList(props) {
  const renderFunc = props.children || props.render;
  return (
    <section className="todoList-container">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {!props.loading && !props.totalTodos && props.onEmptyTodos}
      {!!props.totalTodos &&
        !props.searchedTodos.length &&
        props.onEmptySearchResults(props.searchText)}
      {props.searchedTodos.map(renderFunc)}
    </section>
  );
}

export { TodoList };
