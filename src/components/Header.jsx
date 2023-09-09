import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {

  return (
      <div className='header'>
          <a href='https://drive.google.com/file/d/1G4ttWItOaE5VLwC25WpqZEKbGesuTWlf/view?usp=drive_link' className='resume-link' target='_blank'><h2>Resume</h2></a>
          <div className='header-content'>

              <Link to='/'>
                  <h3 className='home'>Home</h3>
              </Link>

              <Link to='/skills'>
                <h3 className='about-me'>Skills & Courses</h3>
              </Link>

              <Link to='/leadership'>
                  <h3 className='contact'>Leadership</h3>
              </Link>

              <Link to='/experience'>
                  <h3 className='contact'>Experience</h3>
              </Link>

              <Link to='/projects'>
                  <h3 className='contact'>Projects</h3>
              </Link>

              <Link to='/contact'>
                  <h3 className='contact'>Contact</h3>
              </Link>



          </div>

          <div className="min-header-content">
            <Link to="/header"><h3 className='dropdown'></h3></Link>
          </div>
      </div>
  )
}

export default Header