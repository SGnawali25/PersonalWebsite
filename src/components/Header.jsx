import React from 'react'

const Header = () => {
  return (
      <div className='header'>
          <a href='../public/images/SandeshGnawaliResume.pdf' className='resume-link' target='_blank'><h2>Resume</h2></a>
          <div className='header-content'>
              <h3 className='home'>Home</h3>
              <h3 className='contact'>Contact Me</h3>
              <h3 className='about-me'>About Me</h3>
          </div>
      </div>
  )
}

export default Header