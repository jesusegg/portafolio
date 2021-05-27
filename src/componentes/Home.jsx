import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../css/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="div-svg">
        <a href="https://github.com/jesusegg" target="_blank" rel="noreferrer">
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
      <h1 className="titulo-nombre">Jesús Gedler</h1>
      <h3 className="titulo-frontend">Front-end Developer</h3>
      <button className="boton-cv">download cv</button>
    </div>
  );
}

export default Home;
