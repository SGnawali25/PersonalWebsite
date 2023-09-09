import React, { Fragment } from 'react'
import { VscGithub } from "react-icons/vsc";
import { AiOutlineChrome } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <Fragment>
        <h2>Technical Projects</h2>
        <div className="projects">

            <div className="project">
                <h3 className="project-title">SmartShopper</h3>
                <p>SmartShopper is a dynamic MERN application project that encompasses a complete e-commerce platform. User have the ability
                    to register, create accounts, leave review of the products, and makeonline purchases. This project showcases the full
                    spectrum of e-commerece functionalities, providing users with an immersive online experience.
                </p>

                <ul className="project__stack">
                    <li className="project__stack-item">Express.js</li>
                    <li className="project__stack-item">Node.js</li>
                    <li className="project__stack-item">React.js</li>
                    <li className="project__stack-item">MongoDB</li>
                </ul>

                <span className="link-to-github-url">
                    <a href ='https://www.github.com/sgnawali25/smartshopper' target='_blank'><VscGithub/></a>
                </span>


            </div>

            <div className="project">
                <h3 className="project-title">Explorezy</h3>
                <p>
                    Explorezy is a location-based web application that empowers users to explore and contribute to
                    tourist destinations.Integration with Supabase APIs the app facilitates the retrieval and addition of destination
                    details such as names, descriptions, and popularity rankings. 
                </p>

                <ul className="project__stack">
                    <li className="project__stack-item">React.js</li>
                    <li className="project__stack-item">Node.js</li>
                    <li className="project__stack-item">Supabase</li>
                </ul>
                <span className="link-to-github-url">
                    <a href ='https://www.github.com/sgnawali25/explorezy' target='_blank'><VscGithub/></a>
                    <a href ='https://explorezy.netlify.app' target='_blank'><AiOutlineChrome/></a>
                </span>

            </div>

            <div className="project">
                <h3 className="project-title">SearchEngine</h3>
                <p>SearchEngine is a text-based search engine written in python programming language. In this search 
                    engine user can search for the article based on a keyword associated with the article. They can filter the output 
                    based on article length, article published year, article writer, etc.
                </p>

                <ul className="project__stack">
                    <li className="project__stack-item">Python</li>
                </ul>

                <span className="link-to-github-url">
                    <a href ='https://www.github.com/sgnawali25/search_engine' target='_blank'><VscGithub/></a>
                </span>

            </div>

            <div className="project">
                <h3 className="project-title">BlackJack</h3>
                <p>Blackjack is a text based version of BlackJack game that is written in python programming language. Multiple player
                    can play this game at a time.
                </p>

                <ul className="project__stack">
                    <li className="project__stack-item">Python</li>
                </ul>

                <span className="link-to-github-url">
                    <a href ='https://www.github.com/sgnawali25/blackjack' target='_blank'><VscGithub/></a>
                </span>
                

            </div>

            <div className="project">
                <h3 className="project-title">Word Solver</h3>
                <p>
                    Word Solver is a text based version of Word Solver game featuring multiplayer capabilities, challenging
                    players to construct the longest words from a predefined set of letters.

                </p>

                <ul className="project__stack">
                    <li className="project__stack-item">Python</li>
                </ul>

                <span className="link-to-github-url">
                    <a href ='https://www.github.com/sgnawali25/word_solver' target='_blank'><VscGithub/></a>
                </span>

            </div>
        </div>
    </Fragment>
  )
}

export default Projects