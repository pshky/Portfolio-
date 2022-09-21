import React from 'react'
import './header.css'
import me from '../../assets/assets/me.png'
import Headersocials from './headersocials'
import Cta from './cta'
const Header = () => {
  return (
    <header>
      <div className="container">
          <h5>Hello I'am</h5>
          <h1>Prasiddha Shakya</h1>
          <h5 className="text-light">Developer</h5>
          <Cta/>
          <Headersocials/>
          <div className='me'>
            <img src={me} alt='me'/>
          </div>
          <a href='#contact' className='scrolldown'>Scroll Down</a>
            
      </div>
    </header>
  )
}

export default Header