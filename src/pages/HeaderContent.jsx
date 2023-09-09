import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const HeaderContent = () => {
  return (
   <Fragment>
        <Link to = '/' ><h2>Home</h2></Link>
        <Link to = '/skills' ><h2>Skills & Courses </h2></Link>
        <Link to = '/leadership' ><h2>Leadership</h2></Link>
        <Link to = '/experience' ><h2>Experience</h2></Link>
        <Link to = '/projects' ><h2>Projects</h2></Link>
        <Link to = '/contact' ><h2>Contact</h2></Link>
   </Fragment>
  )
}

export default HeaderContent