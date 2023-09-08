import React, { Fragment } from 'react'

const Projects = () => {
  return (
    <Fragment>
        <h2>Projects</h2>
        <div className="projects">

            <div className="project">
                <h3 className="project-title">SmartShopper</h3>
                <p>SmartShopper is a MERN app project. It is a complete e-commerce website where user can create
                    their account and buy the products online.
                </p>

            </div>

            <div className="project">
                <h3 className="project-title">Explorezy</h3>
                <p>Explorezy is an web app developed using React, HTML, CSS, JavaScript and Supabase as a database storage.
                    Explorezy helps people to find the local tourist destination and promote local tourism for the people in new places.
                </p>

            </div>

            <div className="project">
                <h3 className="project-title">SearchEngine</h3>
                <p>SearchEngine is a text based search engine written in python programming language. In this search 
                    engine user can search for their article based on a keyword associated with the article. They can filter the output 
                    based on article length, article published year, article writer, etc.
                </p>

            </div>

            <div className="project">
                <h3 className="project-title">BlackJack</h3>
                <p>Blackjack is a text based version of BlackJack game that is written python programming language. Multiple player
                    can play this game at a time.
                </p>

            </div>

            <div className="project">
                <h3 className="project-title">Hangman</h3>
                <p>Hangman is a text-based version of the game Hangman. This is unique than normal hangman game.
                    When the user ask for the hint it provides possible words to the user based on their correct letter.

                </p>

            </div>
        </div>
    </Fragment>
  )
}

export default Projects