import React from 'react';
import CirclePattern from '../images/circle-pattern.png';
import TrianglePattern from '../images/triangle-pattern.png';

const Projects = () => {
  return (
    <div className="projects">
      <img src={CirclePattern} alt="pattern" className="circle-pattern" />
      <img src={TrianglePattern} alt="pattern" className="triangle-pattern" />
      <div className="project-content">
        <h1>PROJECTS</h1>
        <div className="project-cards">
          <a
            href="https://www.youtube.com/watch?v=YPvICWLZR24"
            className="project-card"
          >
            <img
              src="https://bit.ly/2VFT1me"
              className="amazon-clone-logo project-card-image"
              alt="amazon-logo"
            />
            <label>CLONE</label>
          </a>
          <a
            href="https://www.youtube.com/watch?v=kt0TbYX7nNc"
            className="project-card"
          >
            <img
              src="https://bit.ly/3xw4l1x"
              className="youtube-bot-logo project-card-image"
              alt="youtube-logo"
            />
            <label>VIEW BOT</label>
          </a>
          <a
            href="https://www.youtube.com/watch?v=QG_aJSduPLo"
            className="project-card last-project-card"
          >
            <img
              src="https://bit.ly/3sfUrAt"
              className="google-docs-logo project-card-image"
              alt="google-docs-logo"
            />
            <label>CLONE</label>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
