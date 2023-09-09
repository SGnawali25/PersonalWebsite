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
            <div className='introduction'><h1>Hi, I am Sandesh Gnawali.</h1></div>
            <div className='body-introduction'><h3>Welcome to my portfolio website! I'm a Sophomore at Fisk University, 
              deeply immersed in the world of Computer Science.</h3></div>
        </div>

        <div className="projects-samepage" id='projects'>
          <Projects/>
        </div>

        <div className="experiences-samepage" id='experience'>
          <Experience/>
        </div>

        <div className="leaderships-samepage" id='leadership'>
          <Leadership/>
        </div>
        
        <div className="skills-samepage" id='skills'>
          <Skills/>
        </div>

        <div className="contact-samepage" id='contact'>
            <Contact/>
        </div>
      
      </Fragment>
  )
}

export default Home