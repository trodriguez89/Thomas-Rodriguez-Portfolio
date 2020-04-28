import React from "react";
import Thomas from "../images/Thomas.jpg"
import Fade from "react-reveal/Fade";

const LandingPage = () => {

  return (
    <div id="home">
      <div className="nav-bar">
        <nav>
          <a className="home-style" href="#home">Thomas Rodriguez</a>
          <a className="a-style" href="#projects">Projects</a>
          <a className="a-style" href="#contact">Contact</a>
          <a className="a-style" href="https://drive.google.com/file/d/1id7ulmRB87JpIqcwf7PeTczJgfr4sUyF/view?usp=sharing">Resume</a>
        </nav>
      </div>
      <Fade top>
        <div className="logo-container">
          {/* <img src={Thomas} alt="pic of Thomas, placeholder" className="landing-pic"/> */}
          <h1 className = "name-landing">Thomas Rodriguez</h1>
          <h3 className = "desc-landing">Full-Stack Software Developer</h3>
          <div className="landing-page-button-contain">
        <a href="#projects">
          <button className="landing-page-button">
            View My Projects!
          </button>
          </a>
        </div>
        </div>
        {/* <div className="landing-page-button-contain">
        <a href="#projects">
          <button className="landing-page-button">
            View My Projects!
          </button>
          </a>
        </div> */}
      </Fade>
    </div>
  )
};

export default LandingPage