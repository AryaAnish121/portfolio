import React from 'react';
import CirclePattern from '../images/circle-pattern.png';
import TrianglePattern from '../images/triangle-pattern.png';
import ExpressLogo from '../images/expressjs.png';
import { Link, useHistory } from 'react-router-dom';

const Home = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/contact');
  };
  return (
    <div className="home">
      <img src={CirclePattern} alt="pattern" className="circle-pattern" />
      <img src={TrianglePattern} alt="pattern" className="triangle-pattern" />
      <div className="home-content">
        <h1>Hello, I am Arya</h1>
        <p>
          Creativity is a skill and I have it. Hello, I am Arya, a full stack JS
          who likes to build projects with the popular MERN stack and I love to
          create websites. Please see my
          <Link to="/projects">Projects</Link> and also you can
          <Link to="/contact">Contact me.</Link>Are you in the in the developer
          journey, well I can help you, check out my
          <a href="https://github.com/AryaAnish121">Github</a>.
        </p>
        <div className="tech">
          <img
            src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg"
            alt="mongodb"
            className="tech-img"
          />
          <img src={ExpressLogo} alt="express" className="tech-img" />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png"
            alt="react"
            className="tech-img"
          />
          <img
            src="https://cdn.iconscout.com/icon/free/png-512/node-js-1174925.png"
            alt="node.js"
            className="tech-img"
          />
        </div>
        <button onClick={handleClick}>Contact Me</button>
      </div>
    </div>
  );
};

export default Home;
