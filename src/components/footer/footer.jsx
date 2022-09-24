import React from 'react'
import './footer.css'
import {SiFacebook} from 'react-icons/si'
import {ImYoutube2} from 'react-icons/im'
import {GrInstagram} from 'react-icons/gr'
const footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>PRASIDDHA SHAKYA</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className='footer__socials'>
        <a href='https://facebook.com'><SiFacebook/></a>
        <a href='https://instagram.com'><GrInstagram/></a>
        <a href='https://youtube.com'><ImYoutube2/></a>
      </div>
      <div className='footer__copyright'>
        <small>&copy; Prasiddha Shakya. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default footer