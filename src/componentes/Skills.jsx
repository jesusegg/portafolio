import React from "react";
import js from "../svg/logo-javascript.svg";
import react from "../svg/react-2.svg";
import redux from "../svg/redux.svg";
import html from "../svg/html-5.svg";
import css from "../svg/css-3.svg";
import git from "../svg/git-icon.svg";
import express from "../svg/express-109.svg";
import postgresql from "../svg/postgresql.svg";
import mongodb from "../svg/mongodb-ar21.svg";
import typescript from "../svg/typescript.svg";
import sequelize from "../svg/sequelize.svg";
import node from "../svg/nodejs-icon.svg";
import "../css/Skills.css";
import Fade from "react-reveal/Fade";

// var img = "../img/js.jpeg";

function Skills() {
  return (
    <Fade right>
      <div>
        <h1 className="titulo-skills">SKILLS SET</h1>
        <div className="div-img-skills">
          <div className="imagen-skills">
            <img className="img-skills" src={html} alt="html"></img>
            <h4>HTML5</h4>
          </div>
          <div className="imagen-skills">
            <img className="img-skills" src={css} alt="css"></img>
            <h4>CSS</h4>
          </div>
          <div className="imagen-skills">
            <img className="img-skills" src={js} alt="js"></img>
            <h4>Javascript</h4>
          </div>
          <div className="imagen-skills">
            <img className="img-skills" src={git} alt="git"></img>
            <h4>Git</h4>
          </div>
          <div className="imagen-skills">
            <img className="img-skills" src={react} alt="react"></img>
            <h4>React</h4>
          </div>
          <div className="imagen-skills">
            <img className="img-skills" src={redux} alt="redux"></img>
            <h4>Redux</h4>
          </div>
          <div className="imagen-skills">
            <img className="img-skills" src={node} alt="node"></img>
            <h4>Node js</h4>
          </div>
          <div className="imagen-skills">
            <img className="img-skills" src={express} alt="express"></img>
            <h4>Express</h4>
          </div>
          <div className="imagen-skills">
            <img className="img-skills" src={postgresql} alt="postgresql"></img>
            <h4>PostgreSQL</h4>
          </div>
          <div className="imagen-skills">
            <img className="img-skills" src={mongodb} alt="mongodb"></img>
            <h4>MongoDB</h4>
          </div>
          <div className="imagen-skills">
            <img className="img-skills" src={typescript} alt="typescript"></img>
            <h4>Typescript</h4>
          </div>
          <div className="imagen-skills">
            <img className="img-skills" src={sequelize} alt="sequelize"></img>
            <h4>Sequelize</h4>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default Skills;
