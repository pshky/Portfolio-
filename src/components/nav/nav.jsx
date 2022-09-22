import React from 'react'
import './nav.css'
import {FcHome} from 'react-icons/fc'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookReader} from 'react-icons/bi'
import {RiServiceFill} from 'react-icons/ri'
import {FcContacts} from 'react-icons//fc'

const nav = () => {
  return (
    <nav>
      <a href="#" className='active'><FcHome/></a>
      <a href="#about"><AiOutlineUser/></a>
      <a href="#experience"><BiBookReader/></a>
      <a href="#services"><RiServiceFill/></a>
      <a href="#contact"><FcContacts/></a>
    </nav>
  )
}

export default nav