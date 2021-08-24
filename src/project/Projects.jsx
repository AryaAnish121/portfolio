import React from 'react';
import CirclePattern from '../images/circle-pattern.png';
import TrianglePattern from '../images/triangle-pattern.png';
import { Helmet } from 'react-helmet';

const Projects = () => {
  return (
    <div className="projects">
      <Helmet>
        <title>AryaAnish121: Projects</title>
        <meta
          name="description"
          content="These are Arya Anish's projects. Have a look"
        />
        <meta
          name="keywords"
          content="AryaAnish121, Arya Anish, Projects, Arya Anish Projects"
        />
      </Helmet>
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
              src="https://i.ibb.co/H4zWMCH/amazon.png"
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
              src="https://i.ibb.co/268bd5J/youtube-logo.png"
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
              src="https://i.ibb.co/1KhjTfh/docs.png"
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
