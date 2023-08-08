import React from 'react'
import './App.css'
import './index.css'
import {Link} from 'react-router-dom'
import Header from './components/Header'
import Body from './components/Body'
const App = () => {
  return (
    <div>
      <Header/>
      <Body/>
      {/* <div className="intro-container">
        <h1 className='introduction'>Hi, It's me Sandesh Gnawali.</h1>
      </div>
      <div className="image-container">
        <img src='/images/family.jpeg' className='family' alt='Family' ></img>
      </div>
      <a href='https://drive.google.com/file/d/1E6wI_r5-JtcFYPslzk8dZ0UsC_Y7CFqh/view?usp=drive_link' className='Resume'><h1>Resume</h1></a> */}
    </div>
  )
}

export default App