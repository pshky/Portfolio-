import React from 'react'
import './contact.css'
import {SiGmail} from 'react-icons/si'
import {RiMessengerLine} from 'react-icons/ri'
import {FaViber} from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
const Contact = () => {
  const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_dxlgoe4', 'template_dv9wria', form.current, 'EbU6vaKx5NuTMCmEy')
  e.target.reset()
};
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <SiGmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h6>shakyaprasiddha8@gmail.com</h6>
            <a href='mailto:shakyaprasiddha8@gmail.com' target="_blank">Send a Message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Prasiddha Shakya</h5>
            <a href='https://m.me/prasiddha.shakya1' target="_blank">Send a Message</a>
          </article>
          <article className='contact__option'>
            <FaViber className='contact__option-icon'/>
            <h4>Viber</h4>
            <a href='https://api.viber.com/send?phone=+9779840265924' target="_blank">Send a Message</a>
          </article>
        </div>
        {/*=====end of contact options=======*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact