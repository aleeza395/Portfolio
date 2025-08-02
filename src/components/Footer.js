import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <div id='footer'>
        <h2>Aleeza Zahid &nbsp; Web developer</h2>
        <hr></hr>
        <div id='section'>
          <div id='getintouch'>
            <p className='headings'>Get in Touch</p>
            <p className='para'>Feel free to contact me or explore on social media.</p>
            <p><strong>email : aleezazahid59@gmail.com</strong></p>
            <div id='icons-div'>
              <Link to='https://github.com/aleeza395' target='_blank' className='icons-link'> <FontAwesomeIcon icon={faGithub} className='icons' /></Link>
            <Link to='https://www.linkedin.com/in/aleezazahid/' target='_blank' className='icons-link'><FontAwesomeIcon icon={faLinkedin} className='icons' /></Link>
            </div>
        </div>
        <div id='quicklinks'>
         <p className='headings'>Quick Links</p>
            <Link className='links' to='/home'>Home</Link>
            <Link className='links' to='/about'>About</Link>
            <Link className='links' to='/skills'>Skills</Link>
        </div>
        <div id='footer-btns'>
            <button><Link className='btn-links' to='/projects'>Projects</Link></button>
            <button><Link className='btn-links' to='/contact'>Contact</Link></button>
        </div>
        </div>
    </div>
  )
}

export default Footer