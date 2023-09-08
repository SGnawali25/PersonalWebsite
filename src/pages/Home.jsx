import React, { Fragment } from 'react'
import Contact from './Contact'
import Skills from './Skills'
import Projects from './Projects'
import Experience from './Experience'
import Leadership from './Leadership'

const Home = () => {
  return (
      <Fragment>
        <div className='body'>
            <div className='image-container'>
                <img className='image' src='/images/sandesh.jpg' alt='Me' />
                
            </div>
            <p className='introduction'><h1>Hi, I am Sandesh Gnawali.</h1></p>
            <h3 className='body-introduction'>Welcome to my portfolio website! I'm a Sophomore at Fisk University, deeply immersed in the world of Computer Science.</h3>
        </div>

        <div className="projects-samepage">
          <Projects/>
        </div>

        <div className="experiences-samepage">
          <Experience/>
        </div>

        <div className="leaderships-samepage">
          <Leadership/>
        </div>
        
        <div className="skills-samepage">
          <Skills/>
        </div>
        <br/>

        <div className="contact-samepage">
            <Contact/>
        </div>
      
      </Fragment>
  )
}

export default Home