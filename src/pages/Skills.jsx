import React, { Fragment } from 'react'
import MetaData from '../components/MetaData'

const Skills = () => {
  return (
    <Fragment>
      <MetaData title={"About Me"} />
      <section className='section skills'>
        <h2 className="section-title">Skills</h2>
        <ul className="skills-sets">
          <li className='skills-list-item'>Python</li>
          <li className='skills-list-item'>Java</li>
          <li className='skills-list-item'>HTML</li>
          <li className='skills-list-item'>CSS</li>
          <li className='skills-list-item'>JavaScript</li>
          <li className='skills-list-item'>Git</li>
        </ul>

      </section>

    </Fragment>
  )
}

export default Skills