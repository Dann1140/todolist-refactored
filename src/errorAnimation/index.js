import React from "react";
import Lottie from "lottie-react";
import ErrorIcon from "./errorIcon.json";

function ErrorAnimation() {
  return (
    <React.Fragment>
      <Lottie
        animationData={ErrorIcon}
        style={{
          width: "200px",
          height: "200px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />
      <p style={{ textAlign: "center" }}>¡Ocurrió un error!</p>
    </React.Fragment>
  );
}

export { ErrorAnimation };
