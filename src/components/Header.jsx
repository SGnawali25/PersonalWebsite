import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
      <div className='header'>
          <a href='https://drive.google.com/file/d/1G4ttWItOaE5VLwC25WpqZEKbGesuTWlf/view?usp=drive_link' className='resume-link' target='_blank'><h2>Resume</h2></a>
          <div className='header-content'>
              <h3 className='home'>
                  <Link to='/'>Home</Link>
              </h3>
              <h3 className='contact'>
                  <Link to='/contact'>Contact Me</Link>
              </h3>
              
                  <Link to='/aboutme'><h3 className='about-me'>About Me</h3></Link>
              
          </div>
      </div>
  )
}

export default Header