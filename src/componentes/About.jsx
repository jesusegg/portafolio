import React from "react";
import "../css/About.css";
import img from "../img/foto.jpeg";
import Fade from "react-reveal/Fade";

function About() {
  return (
    <Fade right>
      <div>
        <h1 className="titulo-skills">About Me</h1>
        <div className="contenedor-about">
          <div className="about-img">
            <img src={img} alt="" />
          </div>
          <div className="parrafo">
            <p>
              Hello, I’m Jesus, nice to meet you! Let me tell you a bit about
              myself. I’m a Full Stack Developer with a background in sales and
              currently based in Colombia, working remotely (and constantly
              learning). Although my career path started in a different area,
              I’ve always been interested in the IT world and now that I’m in
              it, I’ve found in coding the perfect match for me. I’m passionate
              about solving problems through code and finding exclusive
              solutions to each one; and I’m excited to work alongside other
              amazing programmers and keep learning.
            </p>
            <p>
              Outside the code, you can always find me listening to good music,
              enjoying outdoors activities, spending quality time with my family
              or petting my dog (or any good dog that crosses my way).
            </p>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default About;
