import React from "react";
import "../css/Nav.css";
import Boton from "./Boton";

function Nav(props) {
  const { handlerStateNav, name, clase } = props;

  return (
    <div className="display-botones">
      <button
        className="boton-nav boton-home"
        name="selectHome"
        onClick={(e) => handlerStateNav(e)}
      >
        <span>Home</span>
      </button>
      <button
        className="boton-nav boton-skill"
        name="selectSkills"
        onClick={(e) => handlerStateNav(e)}
      >
        <span>Skills Set</span>
      </button>
      <button
        className="boton-nav boton-projects"
        name="selectProjects"
        onClick={(e) => handlerStateNav(e)}
      >
        <span>Projects</span>
      </button>
      <button
        className="boton-nav boton-formulario"
        name="selectFormulario"
        onClick={(e) => handlerStateNav(e)}
      >
        <span>Contact</span>
      </button>
    </div>
  );
}

export default Nav;
