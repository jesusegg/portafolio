import React from "react";
import js from "../svg/logo-javascript.svg";
import react from "../svg/react-2.svg";
import redux from "../svg/redux.svg";
import html from "../svg/html-5.svg";
import css from "../svg/css-3.svg";
import git from "../svg/git-icon.svg";
import express from "../svg/express-109.svg";
import node from "../svg/nodejs-icon.svg";
import "../css/Skills.css";

// var img = "../img/js.jpeg";

function Skills() {
  return (
    <div>
      <h1 className="titulo-skills">SKILLS SET</h1>
      <div className="div-img-skills">
        <div className="imagen-skills">
          <img
            style={{ width: "100px", height: "110px" }}
            src={html}
            alt="html"
          ></img>
          <h4>Html5</h4>
        </div>
        <div className="imagen-skills">
          <img
            style={{ width: "100px", height: "110px" }}
            src={css}
            alt="css"
          ></img>
          <h4>CSS</h4>
        </div>
        <div className="imagen-skills">
          <img
            style={{ width: "100px", height: "110px" }}
            src={js}
            alt="js"
          ></img>
          <h4>Javascript</h4>
        </div>
        <div className="imagen-skills">
          <img
            style={{ width: "100px", height: "110px" }}
            src={git}
            alt="git"
          ></img>
          <h4>Git</h4>
        </div>
        <div className="imagen-skills">
          <img
            style={{ width: "100px", height: "110px" }}
            src={react}
            alt="react"
          ></img>
          <h4>React</h4>
        </div>
        <div className="imagen-skills">
          <img
            style={{ width: "100px", height: "110px" }}
            src={redux}
            alt="redux"
          ></img>
          <h4>Redux</h4>
        </div>
        <div className="imagen-skills">
          <img
            style={{ width: "100px", height: "110px" }}
            src={node}
            alt="node"
          ></img>
          <h4>Node js</h4>
        </div>
        <div className="imagen-skills">
          <img
            style={{ width: "100px", height: "110px" }}
            src={express}
            alt="express"
          ></img>
          <h4>Express</h4>
        </div>
      </div>
    </div>
  );
}

export default Skills;
