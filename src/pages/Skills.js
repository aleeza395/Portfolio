import React from 'react'
import Header from '../components/Header'
import './Skills.css'
import Footer from '../components/Footer'

const Skills = () => {
  return (
    <>
    <Header />
    <div className='background' id='skills'>
        <h1>Skill set</h1>
        <div className='cards-box'>
          <div className='cards'>
            <h3>Frontend</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>Responsive Design</li>
                <li>React.js</li>
                <li>EJS</li>
              </ul>
          </div>
          <div className='cards'>
            <h3>Backend</h3>
              <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>SQLite</li>
                <li>Authentication</li>
                <li>JWT tokens</li>
                <li>Cookies</li>
              </ul>
          </div>
          <div className='cards'>
            <h3>Other tools & technologies</h3>
              <ul>
                <li>GitHub</li>
                <li>VS Code</li>
                <li>Netlify / Vercel</li>
              </ul>
          </div>
        </div>
        <div className='cards-box'>
          <div className='cards'>
            <h3>Currently learning</h3>
              <ul>
                <li>Cybersecurity basics</li>
                <li>Advanced React patterns</li>
                <li>Backend Optimization</li>
              </ul>
          </div>
          <div className='cards'>
            <h3>Soft skills</h3>
              <ul>
                <li>Problem Solving</li>
                <li>Time Management</li>
                <li>Communication & Collaboration</li>
                <li>Adaptability</li>
              </ul>
          </div>
          </div>
    </div>
    <Footer />
    </>
  )
}

export default Skills