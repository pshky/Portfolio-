import React from 'react'
import CV from '../../assets/assets/prasiddha-shakya-resume.pdf'
const cta = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href='#contact' className='btn btn-primary'>Lets' Talk</a>
    </div>
  )
}

export default cta