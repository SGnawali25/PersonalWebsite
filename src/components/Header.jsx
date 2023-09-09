import React, {useState} from 'react'
import { Link } from 'react-router-dom'
const Header = () => {

  return (
    <div className='header'>
      <a href='https://drive.google.com/file/d/1G4ttWItOaE5VLwC25WpqZEKbGesuTWlf/view?usp=drive_link' className='resume-link' target='_blank'><h2>Resume</h2></a>
      <div className='header-content'>

        <a href='#projects' className='home'><h3>Projects</h3></a>
        <a href='#experience' className='home'><h3>Experience</h3></a>
        <a href='#leadership' className='home'><h3>Leadership</h3></a>
        <a href='#skills' className='home'><h3>Skills & Courses</h3></a>
        <a href='#contact' className='home'><h3>Contact</h3></a>


      </div>

      <div className="min-header-content">
        <Link to="/header"><h3 className='dropdown'></h3></Link>
      </div>
    </div>
  )
}

export default Header