import React from 'react'
import './App.css'
import './index.css'
import {Link} from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact'
import AboutMe from './pages/AboutMe'
const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' Component={Home} exact />
        <Route path='/contact' Component={Contact} exact/>
        <Route path = '/aboutme' Component={AboutMe} exact/>
        
      </Routes>
    </div>
  )
}

export default App