import React from "react";
import "./createTodoButton.css";

function CreateTodoButton(props) {
  const onClickButton = () => {
    props.setOpenModal((prevState) => !prevState);
  };
  return (
    <button className="createTodoButton" onClick={onClickButton}>
      +
    </button>
  );
}

export { CreateTodoButton };
