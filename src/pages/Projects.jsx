import React, { Fragment } from 'react'
import { VscGithub } from "react-icons/vsc";
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <Fragment>
        <h2>Technical Projects</h2>
        <div className="projects">

            <div className="project">
                <h3 className="project-title">SmartShopper</h3>
                <p>SmartShopper is a MERN app project. It is a complete e-commerce website where user can create
                    their account and buy the products online.
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
                <p>Explorezy is an web app developed using React, HTML, CSS, JavaScript and Supabase as a database storage.
                    Explorezy helps people to find the local tourist destination and promote local tourism for the people in new places.
                </p>

                <ul className="project__stack">
                    <li className="project__stack-item">React.js</li>
                    <li className="project__stack-item">Node.js</li>
                    <li className="project__stack-item">Supabase</li>
                </ul>
                <span className="link-to-github-url">
                    <a href ='https://www.github.com/sgnawali25/explorezy' target='_blank'><VscGithub/></a>
                </span>

            </div>

            <div className="project">
                <h3 className="project-title">SearchEngine</h3>
                <p>SearchEngine is a text based search engine written in python programming language. In this search 
                    engine user can search for their article based on a keyword associated with the article. They can filter the output 
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
                <p>Blackjack is a text based version of BlackJack game that is written python programming language. Multiple player
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
                <h3 className="project-title">Hangman</h3>
                <p>Hangman is a text-based version of the game Hangman. This is unique than normal hangman game.
                    When the user ask for the hint it provides possible words to the user based on their correct letter.

                </p>

                <ul className="project__stack">
                    <li className="project__stack-item">Python</li>
                </ul>

                <span className="link-to-github-url">
                    <a href ='https://www.github.com/sgnawali25/hangman' target='_blank'><VscGithub/></a>
                </span>

            </div>
        </div>
    </Fragment>
  )
}

export default Projects