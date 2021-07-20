import React from "react";
import img from "../img/vamoa.jpg";
import "../css/Projects.css";
import camisas from "../img/camisas.png";
import dogs from "../img/dogs.jpg";
import concierto from "../img/concierto.png";
import netflix from "../img/netflix-clone.jpg";
import Fade from "react-reveal/Fade";

function Projects() {
  return (
    <Fade right>
      <div>
        <h1 className="titulo-skills">PROJECTS</h1>
        <div className="div-img-projects">
          <div className="imagen-projects">
            <a
              href="https://netflix-clone-f490a.web.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                style={{ width: "350px", height: "190px" }}
                src={netflix}
                alt=""
              ></img>
            </a>
            <h4>Netflix clone</h4>
          </div>
          <div className="imagen-projects">
            <a
              href="https://dogs-breeds-jesus-a6d82.web.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                style={{ width: "350px", height: "190px" }}
                src={dogs}
                alt=""
              ></img>
            </a>
            <h4>Dogs Breeds</h4>
          </div>
          <div className="imagen-projects">
            <a
              href="https://concierto-jesusgedler.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                style={{ width: "350px", height: "190px" }}
                src={concierto}
                alt=""
              ></img>
            </a>
            <h4>Landing page - concert</h4>
          </div>
          <div className="imagen-projects">
            <a
              href="https://frontendjesusgedler.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                style={{ width: "350px", height: "190px" }}
                src={camisas}
                alt=""
              ></img>
            </a>
            <h4>Shirts catalog page</h4>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default Projects;
