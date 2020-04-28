import React from "react";

import citrics from "../images/citrics.JPG";
import wl from "../images/wl.JPG";
import weight from "../images/weight-lifting.JPG";

const Projects = () => {

    return (
        <div className="project-contain" id="projects">
            <div>
                <h2 className="title-projects">Projects</h2>
                <h3 className = "title-github">Here are a couple of projects I worked on. To view more visit my <a className="github-projects" href="https://github.com/trodriguez89">Github</a></h3>
            </div>

            <div className="project-contain-info">

                <div className="citrics-image">
                    <a href="https://www.citrics.io/"><img className="citrics-img" src={citrics} /></a>
                </div>

                <div className="project-info">
                    <h3 className = "project-title">Citrics</h3>
                    <p className= "project-desc">Citrics is a city data comparison tool. I was a part of a team consisting of 5 Web Developers, 2 Data Scientists, and 2 UX Designers. The data on the main comparison page is gathered from the U.S. Census data, Zillow, and an external Weather API. My team worked on the main features that included the Single City Page, which provides qualitative data, such as restaraunts, events, museums, sporting events, etc. This data is gathered from a Yelp API.</p>

                    <p className= "project-desc">Tech Stack: React, Node.js, ChartJS, OAuth, MapBox, Yelp API</p>
                    <div className="project-button-container">
                        <a href="https://www.citrics.io/"><button className="project-button" >Website</button></a>
                        <a href="https://github.com/Lambda-School-Labs/city-data-comparison-fe"><button className="project-button">View Code</button></a>
                    </div>
                </div>

            </div>

            <div className="project-contain-info">

                <div className="wl-image">
                    <a href="https://front-end-seven-blond.now.sh/"><img className="wl-img" src={weight} /></a>
                </div>

                <div className="project-info">
                    <h3 className = "project-title">Weight Lifting Journal</h3>
                    <p className= "project-desc">Weight Lifting Journal allows a user to track their workouts including weight, reps, sets, and targeted area. Users are also able to delete or edit any existing workouts. I worked with a team consisting of 1 Back-End Developer and 3 Web Developers.</p>

                    <p className= "project-desc">Tech Stack: React, Node.js, Express</p>
                    <div className="project-button-container">
                        <a href="https://front-end-seven-blond.now.sh/"><button className="project-button">Website</button></a>
                        <a href="https://github.com/trodriguez89/front-end"><button className="project-button">View Code</button></a>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default Projects;