import React, { Fragment } from 'react'

const Skills = () => {
  return (
    <Fragment>

      <div className="skills-courses">
        <section className='section skills'>
          <div className="centered-content">
            <h2 className="section-title">Skills</h2>
            <ul className="skills-sets">
              <li className='skills-list-item'>Express.js</li>
              <li className='skills-list-item'>Node.js</li>
              <li className='skills-list-item'>Python</li>
              <li className='skills-list-item'>Java</li>
              <li className='skills-list-item'>JavaScript</li>
              <li className='skills-list-item'>HTML</li>
              <li className='skills-list-item'>CSS</li>
              <li className='skills-list-item'>Git</li>
              <li className='skills-list-item'>Github</li>
            </ul>
          </div>
        </section>

        <section className='section skills'>
          <div className="centered-content">
            <h2 className="section-title">Courses</h2>
            <ul className="skills-sets">
              <li className='courses-list-item'>Data Structures and Algorithms</li>
              <li className='courses-list-item'>Machine Learning for Social Science</li>
              <li className='courses-list-item'>Data Science for Social Justice</li>
              <li className='courses-list-item'>Intro to Computer Science I & II</li>
              <li className='courses-list-item'>Calculus I & II</li>
              <li className='courses-list-item'>Intermediate Web Development</li>
            </ul>
          </div>
        </section>
      </div>



    </Fragment>
  )
}

export default Skills