import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithubSquare} from 'react-icons/fa'
import {AiFillFacebook} from 'react-icons/ai'
const Headersocials = () => {
  return (
    <div className='Headersocials'>
        <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com" target="_blank"><FaGithubSquare/></a>
        <a href="https://facebook.com" target="_blank"><AiFillFacebook/></a> 
    </div>
  )
}

export default Headersocials