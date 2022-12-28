import React from "react";
import { withStorageListener } from "./withStorageListener";
import "./changeAlert.css";

function ChangeAlert({ show, toggleShow }) {
  if (show) {
    return (
      <div className="changeAlert-bg">
        <div className="changeAlert--container">
          <p className="changeAlert-p">
            Parece que hubo cambios desde otra fuente/ventana.
          </p>
          <button className="changeAlert-btn" onClick={() => toggleShow(false)}>
            Recargar
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };
