import React from "react";

function Boton(prop) {
  const { name, handlerStateNav, clase } = prop;
  return (
    <div>
      <button
        className={`boton-nav ${clase}`}
        onClick={(e) => handlerStateNav(e)}
      >
        <span>{name}</span>
      </button>
    </div>
  );
}

export default Boton;
