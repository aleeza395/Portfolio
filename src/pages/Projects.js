import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Projects.css";
import { Link } from "react-router-dom";
import Projectcard from "../components/Projectcard";

const Projects = () => {
  return (
    <>
      <Header />
      <div className="background" id="projects">
        <h1>Here are the projects I've done</h1>
        <div className="projects-box">

          <Projectcard
            title="Calculator"
            imgLink='https://calculator-aleeza.netlify.app/'
            imgSrc="calculator.jpeg"
            description="A basic yet functional calculator app built with React.js. While simple, it demonstrates state management and component-based structure in React — perfect as a warm-up project for diving deeper into frontend frameworks."
          />

          <Projectcard
            title="Hangman"
            imgLink='https://hangman-aleeza.netlify.app/'
            imgSrc="hangman.jpeg"
            description="An interactive word-guessing game for one player. Created using HTML, CSS, and JavaScript, it features a letter-checking algorithm, visual feedback on guesses, and reinforces logic-based game programming."
          />

          <Projectcard
            title="Writeup"
            imgLink='https://journalingapp-production.up.railway.app/'
            imgSrc="writeup.png"
            description="A full-stack web application that allows users to sign up, log in, and manage personal content like journal entries, stories, and book lists. Built using Node.js, Express.js, EJS, and SQLite, it includes authentication, persistent data storage, and clean UI templating — with a strong focus on backend functionality."
          />
          
        </div>
        <div className="projects-box">
          <Projectcard
            title="Tic Tac Toe"
            imgLink='https://tic-tac-toe-aleeza.netlify.app/'
            imgSrc="game1.jpg"
            description="A classic two-player game built using HTML, CSS, and JavaScript. It features interactive UI updates based on turns, win-draw detection logic, and highlights the basics of DOM manipulation and game state handling."
          />

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
        </div>
        <p>Let's work on the next project together</p>
        <button>
          <Link className="link" to="/contact">
            Get in touch
          </Link>
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Projects;
