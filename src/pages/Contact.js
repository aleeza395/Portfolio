import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './Contact.css'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import emailjs from 'emailjs-com'
import { useRef } from 'react';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_8uidp38', 'template_udxlz3u', form.current, 'mbBLBjVzg-jLqP5gF'
    ).then(
      (result) => {
        console.log(result);
        alert("Message sent successfully!");
      }, (error) => {
        console.log(error);
        alert("Error occured")
      }
    )
    e.target.reset();
  }

  return (
    <>
    <Header />
    <div className='background' id='contact'>
        <div className='box-container'>
          <div className='boxes' id='box1'>
            <h2 className='contact-content'>Get in Touch</h2>
            <p className='contact-content'>Feel free to contact me or explore on social media.</p>
            <p className='contact-link' id='phone'><FontAwesomeIcon icon={faPhone} /> +92 333 5222462</p>
            <p className='contact-link'><FontAwesomeIcon icon={faEnvelope} /> aleezazahid59@gmail.com</p>
            <div id='icons-div'>
              <Link to='https://github.com/aleeza395' className='contact-link' target='_blank'> <FontAwesomeIcon icon={faGithub} className='contact-icons' /></Link>
            <Link to='https://www.linkedin.com/in/aleezazahid/' className='contact-link' target='_blank'><FontAwesomeIcon icon={faLinkedin} className='contact-icons' /></Link>
            </div>
          </div>
        <div className='boxes' id='box2'>
          <h2>Send a message</h2>
          <form ref={form} onSubmit={sendEmail}>
            <div>
            <label htmlFor='fullname'>Your name</label>
            <input id='fullname' type='text' name='fullname' placeholder='Enter your name' required/>
          </div>
          <div>
            <label htmlFor='email'>Your email</label>
            <input id='email' type='email' name='email' placeholder='Enter your email' required/>
          </div>
          <div>
            <label htmlFor='message'>Type a message</label>
            <textarea rows={3} cols={3} id='message' type='text' name='message' placeholder='Type here'></textarea>
          </div>
          <button type='submit'>Send</button>
          </form>
        </div>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default Contact