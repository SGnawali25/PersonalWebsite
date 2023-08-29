import React, { Fragment } from 'react'
import MetaData from '../components/MetaData'
import Contact from './Contact'
import Skills from './Skills'

const Home = () => {
  return (
      <Fragment>
        <MetaData title = {"Home"} />
        <div className='body'>
            <div className='image-container'>
                <img className='image' src='/images/sandesh.jpg' alt='Me' />
                
            </div>
            <p className='introduction'><h1>Hi, I am Sandesh Gnawali.</h1></p>
            <h3 className='body-introduction'>Welcome to my portfolio website! I'm a Sophomore at Fisk University, deeply immersed in the world of Computer Science.</h3>
        </div>
        <div className="contact-samepage">
            <Contact/>
        </div>
        <div className="skills-samepage">
          <Skills/>
        </div>
        <br/>
      
      </Fragment>
  )
}

export default Home