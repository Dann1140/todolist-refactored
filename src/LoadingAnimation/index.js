import React from "react";
import Lottie from "lottie-react";
import walkingbomb from "./walkingbomb.json";
function LoadingAnimation() {
  const stylingAni = { widht: "200px", height: "200px" };
  const stylingP = { textAlign: "center" };
  return (
    <React.Fragment>
      <Lottie loop={true} animationData={walkingbomb} style={stylingAni} />
      <p style={stylingP}>Cargando...</p>
    </React.Fragment>
  );
}

export { LoadingAnimation };
