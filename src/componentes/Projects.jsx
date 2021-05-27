import React from "react";
import img from "../img/vamoa.jpg";
import "../css/Projects.css";

function Projects() {
  return (
    <div>
      <h1 className="titulo-skills">PROJECTS</h1>
      <div className="div-img-projects">
        <div className="imagen-projects">
          <img style={{ width: "50px", height: "60px" }} src={img} alt=""></img>
          <h4>proyecto</h4>
        </div>
        <div className="imagen-projects">
          <img style={{ width: "50px", height: "60px" }} src={img} alt=""></img>
          <h4>proyecto</h4>
        </div>
        <div className="imagen-projects">
          <img style={{ width: "50px", height: "60px" }} src={img} alt=""></img>
          <h4>proyecto</h4>
        </div>
        <div className="imagen-projects">
          <img style={{ width: "50px", height: "60px" }} src={img} alt=""></img>
          <h4>proyecto</h4>
        </div>
        <div className="imagen-projects">
          <img style={{ width: "50px", height: "60px" }} src={img} alt=""></img>
          <h4>proyecto</h4>
        </div>
        <div className="imagen-projects">
          <img style={{ width: "50px", height: "60px" }} src={img} alt=""></img>
          <h4>proyecto</h4>
        </div>
      </div>
    </div>
  );
}

export default Projects;
