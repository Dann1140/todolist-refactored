import React from "react";
import "./todoItem.css";
function TodoItem(props) {
  return (
    <li className="icon todoItem">
      <span
        className={`complete-btn ${props.completed && "todoItem-c--completed"}`}
        onClick={props.onComplete}
      >
        C
      </span>
      <p className={`todoItem-p ${props.completed && "todoItem-p--completed"}`}>
        {props.text}
      </p>
      <span className="icon delete-btn" onClick={props.onDelete}>
        X
      </span>
    </li>
  );
}

export { TodoItem };
