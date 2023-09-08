import React, { Fragment } from 'react'

const Experience = () => {
  return (
    <Fragment>
        <h2>Experience</h2>
        <div className="experiences">
            <div className="experience">
                <h3 className="experience-title">Company : AYES</h3>
                <span>Role : Technology Specialist</span>
                <p>Working as Technology Specialist at AYES(Aspiring Youth Enrichment Service). Working on 
                    improvement of website performance
                </p>
            </div>

            <div className="experience">
                <h3 className="experience-title">Company : Knight-Angel-Organization</h3>
                <span>Role : Backend Developer</span>
                <p>Worked on the backend developement of the social media website. Connected the backend to the MongoDB.
                    wrote different controllers for the user. Defined user model to store user data in database.
                </p>
            </div>

            <div className="experience">
                <h3 className="experience-title">Company : Power Youth</h3>
                <span>Role : Tutor</span>
                <p>Taught 90 middle school and high school students regarding the fundamentals of computer programming
                    and Mathematics
                </p>
            </div>

            

            

            
        </div>
    </Fragment>
  )
}

export default Experience