import "./App.css";
import Formulario from "./componentes/Formulario";
import Home from "./componentes/Home";
import Nav from "./componentes/Nav";
import Projects from "./componentes/Projects";
import Skills from "./componentes/Skills";
import React, { useState } from "react";
import Divcolor from "./componentes/Divcolor";
import styled from "styled-components";
import About from "./componentes/About";
import Fade from "react-reveal/Fade";

function App() {
  const [boton, setBoton] = useState({
    selectHome: true,
    selectSkills: false,
    selectProjects: false,
    selectFormulario: false,
    selectAbout: false,
  });

  function handlerStateNav(e) {
    setBoton({
      selectProjects: false,
      selectHome: false,
      selectSkills: false,
      selectFormulario: false,
      selectAbout: false,
      [e.target.name]: true,
    });
  }

  const proporciones = {
    home: boton.selectHome ? "80%" : "5%",
    skills: boton.selectSkills ? "80%" : "5%",
    projects: boton.selectProjects ? "80%" : "5%",
    contact: boton.selectFormulario ? "80%" : "5%",
    about: boton.selectAbout ? "80%" : "5%",
  };

  const DivPortafolio = styled.div`
    display: grid;
    grid-template-columns: ${proporciones.home} ${proporciones.skills} ${proporciones.projects} ${proporciones.about} ${proporciones.contact};
  `;

  return (
    <div className="App">
      {/* {nav} fijo */}

      {/* <Nav handlerStateNav={handlerStateNav} /> */}
      {/* {home}  ---{2*boton}{title}{botoncv} */}
      {/* {boton.selectHome && <Home />} */}

      {/* {skills set} {x * img} */}
      {/* {boton.selectSkills && <Skills />} */}

      {/* {proyects} */}
      {/* {boton.selectProjects && <projects />} */}

      {/* {contacto}{formulario} */}
      {/* {boton.selectFormulario && <Formulario />} */}
      {/* <div className="contenedor-divColor"> */}

      <DivPortafolio>
        <Divcolor
          handlerStateNav={handlerStateNav}
          texto={!boton.selectHome && "H O M E"}
          nombre={"selectHome"}
          claseColor={"capa1"}
          componente={boton.selectHome && <Home />}
        />

        <Divcolor
          handlerStateNav={handlerStateNav}
          texto={!boton.selectSkills && "S K I L L S"}
          nombre="selectSkills"
          claseColor={"capa2"}
          componente={boton.selectSkills && <Skills />}
        />

        <Divcolor
          handlerStateNav={handlerStateNav}
          texto={!boton.selectProjects && "P R O J E C T S"}
          nombre="selectProjects"
          claseColor={"capa3"}
          componente={boton.selectProjects && <Projects />}
        />

        <Divcolor
          handlerStateNav={handlerStateNav}
          texto={!boton.selectAbout && "A B O U T"}
          claseColor={"capa5"}
          nombre="selectAbout"
          componente={boton.selectAbout && <About />}
        />
        <Divcolor
          handlerStateNav={handlerStateNav}
          texto={!boton.selectFormulario && "C O N T A C T "}
          nombre="selectFormulario"
          claseColor={"capa4"}
          componente={boton.selectFormulario && <Formulario />}
        />
      </DivPortafolio>

      {/* </div> */}
      {/* {bonus} */}
    </div>
  );
}

export default App;
