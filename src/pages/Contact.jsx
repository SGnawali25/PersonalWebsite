import React, { Fragment } from 'react'

const Contact = () => {
  return (
    <Fragment>
      <div className="contact-page">
        <div className="linkedin">
          <img className='contacts-logo' src='/images/linkedin.png' alt='Sandesh Gnawali' />
          <br/>
          <a className="content-linkedin" href='https://www.linkedin.com/in/sandesh-gnawali' target='_blank'>Sandesh-Gnawali</a>
        </div>
        <div className="gmail">
          <img className='contacts-logo' src='/images/gmail.jpg' alt='sandeshgyawali25@gmail.com'/>
          <br/>
          <a className='content-gmail' href='mailto:sandeshgyawali25@gmail.com' target='_blank'>Email Me</a>
        </div>
        <div className="github">
          <img className='contacts-logo' src='/images/github.png' alt='sgnawali25'/>
          <br/>
          <a className='content-github' href='https://github.com/sgnawali25' target='_blank'>SGnawali25</a>
        </div>
      </div>

    </Fragment>
  )
}

export default Contact