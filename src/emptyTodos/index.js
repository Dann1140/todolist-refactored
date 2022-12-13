import React from "react";
import "./emptyTodos.css";
function EmptyTodos() {
  return (
    <React.Fragment>
      <img
        className="emptyImg"
        src="https://res.cloudinary.com/df8ow6m3o/image/upload/v1670951366/others/KEY_car_koxzdg.webp"
        alt="empty todo img"
      />
      <p style={{ textAlign: "center" }}>¡Crea tu primer Tarea!</p>
    </React.Fragment>
  );
}

export { EmptyTodos };
