import React from "react";
import "./todoItem.css";
import { AiFillCheckCircle, AiFillDelete } from "react-icons/ai";
function TodoItem(props) {
  return (
    <li className="todoItem">
      <AiFillCheckCircle
        className={`icon complete-btn ${
          props.completed && "todoItem-c--completed"
        }`}
        onClick={props.onComplete}
      />
      <p className={`todoItem-p ${props.completed && "todoItem-p--completed"}`}>
        {props.text}
      </p>
      <AiFillDelete className="icon delete-btn" onClick={props.onDelete} />
    </li>
  );
}

export { TodoItem };
