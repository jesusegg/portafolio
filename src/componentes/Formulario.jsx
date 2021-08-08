import React, { useRef } from "react";
import "../css/Formulario.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Fade from "react-reveal/Fade";
import db from "../firebase/config.js";
import { useState } from "react";

function Formulario() {
  const ref1 = useRef(undefined);
  const ref2 = useRef(undefined);
  const ref3 = useRef(undefined);
  const [state, setState] = useState(false);
  if (ref1?.current?.value === "") {
    setTimeout(() => {
      setState(false);
    }, 1500);
  }
  return (
    <Fade right>
      <div className="grid-formulario">
        <div className="contenedor-formulario">
          <h1>CONTACT ME</h1>
          <div className="div-input">
            <label>Name</label>
            <input ref={ref1} type="text" required />
          </div>
          <div className="div-input">
            <label>Email</label>
            <input ref={ref2} type="email" required />
          </div>
          <div className="div-input">
            <label>Message</label>
            <textarea ref={ref3} className="mensaje"></textarea>
          </div>
          <button
            onClick={() => {
              const mensaje = {
                nombre: ref1.current.value,
                correo: ref2.current.value,
                mensaje: ref3.current.value,
              };
              db.collection("mensajes").add(mensaje);
              ref1.current.value = "";
              ref2.current.value = "";
              ref3.current.value = "";
              setState(true);
            }}
            className="botonFormulario"
          >
            send
          </button>
          {state && <h1>info send successfully</h1>}
        </div>
        <div className="div-git">
          <p style={{ color: "white" }}>You can also reach me at</p>
          <div>
            <a
              href="https://github.com/jesusegg"
              target="_blank"
              rel="noreferrer"
            >
              <button className="boton-svg">
                <GitHubIcon />
              </button>
            </a>
            <a
              href="https://www.linkedin.com/in/jesusegg/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="boton-svg">
                <LinkedInIcon />
              </button>
            </a>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default Formulario;
