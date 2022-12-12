import React from "react";
import "./todoList.css";
function TodoList(props) {
  return <ul className="todoList">{props.children}</ul>;
}

export { TodoList };
