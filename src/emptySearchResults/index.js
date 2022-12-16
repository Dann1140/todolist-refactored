import React from "react";
import "./emptySearchResults.css";

function EmptySearchResults(props) {
  return (
    <React.Fragment>
      <img
        className="emptyImg"
        src="https://res.cloudinary.com/df8ow6m3o/image/upload/v1671151349/others/imgbin_kirbys-epic-yarn-wii-super-smash-bros-kirby-super-star-png_gqaxae.png"
        alt="empty todo img"
      />
      <p style={{ textAlign: "center" }}>
        No hay resultados para {props.searchText}
      </p>
    </React.Fragment>
  );
}

export { EmptySearchResults };
