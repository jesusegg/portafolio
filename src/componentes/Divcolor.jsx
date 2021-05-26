import React from "react";
import "../css/Divcolor.css";

function Divcolor(props) {
  const { claseColor, texto, componente, nombre, handlerStateNav } = props;
  return (
    <div className={claseColor}>
      {componente}
      <button
        name={nombre}
        onClick={(e) => handlerStateNav(e)}
        className={"texto-vertical"}
      >
        {texto}
      </button>
    </div>
  );
}

export default Divcolor;
