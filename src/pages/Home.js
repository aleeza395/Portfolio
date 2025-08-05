import React from "react";
import Header from "../components/Header";
import "./Home.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase, faPalette, faPlug } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";
import Projectcard from "../components/Projectcard";

const Home = () => {
  return (
    <>
      <Header />
      <div className="background" id="home">
        <div id="hero-section">
          <h1>Hi! I am Aleeza Zahid, a Web Developer</h1>
          <p>
            Web developer, passionate about building responsive, user-friendly
            web experiences
          </p>
          <div id="home-btns">
            <button id="about-btn">
              <Link id="about-link" to="/about">
                More about me
              </Link>
            </button>
            <button className="project-btn">
              <Link className="project-link" to="/projects">
                Check my work
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="background" id="project-section">
        <h2>Some of the projects that I have done so far</h2>
        <div className="projects-box">
          <Projectcard
            title="Currency Converter"
            imgLink='https://currencyconverter-aleeza.netlify.app/'
            imgSrc="currency converter.jpg"
            description="A dynamic web app that lets users convert between global currencies in real time. Built with HTML, CSS, and JavaScript, this project demonstrates effective API integration and the use of objects and event handling to manage user input and display results."
          />

          <Projectcard
            title="Rock Paper Scissors"
            imgLink='https://rockpaperscissors-aleeza.netlify.app/'
            imgSrc="rockpaperscissor.jpeg"
            description="A single-player game against the computer with 3-round logic. Developed using HTML, CSS, and JavaScript, this project showcases dynamic user feedback, randomization techniques, and responsive design principles."
          />

          <Projectcard
            title="Writeup"
            imgLink='https://journalingapp-production.up.railway.app/'
            imgSrc="writeup.png"
            description="A full-stack web application that allows users to sign up, log in, and manage personal content. Built using Node.js, Express.js, EJS, and SQLite — with a strong focus on backend functionality."
          />
        </div>
        <button className="project-btn">
          <Link className="project-link" to="/projects">
            View all projects
          </Link>
        </button>
      </div>
      <div className="background" id="aboutskills">
        <h2>A little about myself!</h2>
        <p>
          For the past one and a half years, I’ve been building web projects
          from scratch — combining responsive frontend interfaces with powerful
          backend functionality. Whether it’s designing clean UI in React or
          connecting APIs and databases with Node.js, I turn ideas into
          interactive websites.
        </p>
        <div id="skills-box">
          <div className="skill-container">
            <div className="skill-divs">
              <FontAwesomeIcon icon={faPalette} className="icons" />
            </div>
            <p className="skills-title">Interactive design</p>
          </div>
          <div className="skill-container">
            <div className="skill-divs">
              <FontAwesomeIcon icon={faPlug} className="icons" />
            </div>
            <p className="skills-title">API Integration</p>
          </div>
          <div className="skill-container">
            <div className="skill-divs">
              <FontAwesomeIcon icon={faDatabase} className="icons" />
            </div>
            <p className="skills-title">Database connectivity</p>
          </div>
        </div>
        <button id="about-btn">
          <Link id="about-link" to="/skills">
            Learn more about skills
          </Link>
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Home;
