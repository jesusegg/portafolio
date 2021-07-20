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
        Home
      </button>
      <button
        className="boton-nav boton-skill"
        name="selectSkills"
        onClick={(e) => handlerStateNav(e)}
      >
        Skills Set
      </button>
      <button
        className="boton-nav boton-projects"
        name="selectProjects"
        onClick={(e) => handlerStateNav(e)}
      >
        Projects
      </button>
      <button
        className="boton-nav boton-about"
        name="selectAbout"
        onClick={(e) => handlerStateNav(e)}
      >
        About
      </button>
      <button
        className="boton-nav boton-formulario"
        name="selectFormulario"
        onClick={(e) => handlerStateNav(e)}
      >
        Contact
      </button>
    </div>
  );
}

export default Nav;
