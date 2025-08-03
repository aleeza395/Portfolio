import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import './About.css'

const About = () => {
  return (
   <>
    <Header />
    <div className='background' id='about'> 
        <h1>About me</h1>
        <div className='about-content'>
          <p>Hi! I'm Aleeza Zahid, a CS student, recently completed my 4th semester and web developer with 1.5 years of learning how to build interactive websites using React, Node.js, and more.</p>
        <p>My coding journey began with small games and soon evolved into full-stack web applications. I love solving problems, crafting clean UIs, and learning new tech.</p>
        <p>Other than Web Development, I also run a small business of paintings and handicrafted jewelery named Canvas.and.craft</p>
        <p>I’m currently seeking opportunities where I can grow as a developer and contribute to real-world projects.</p>
        </div>
        <button><Link className='about-link' to='/Resume (2).pdf' target='_blank'>Check Resume</Link></button>
    </div>
    <Footer />
   </>
  )
}

export default About