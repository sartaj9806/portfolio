import React from 'react'
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Project from './pages/Project'
import Skills from './pages/Skills'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Education from './pages/Education'

const App = () => {
  return (
    <>

      <Navbar />
      < ToastContainer />

      <div className='text-white  py-[64px]'>
        <Home />
        <About />
        <Skills />
        <Project />
        <Education />
        <Contact />
        <Footer />
      </div>


    </>
  )
}

export default App
