import React from 'react'
import './about.css'
import me from "../../assets/assets/me-about.jpg"
import {BsAwardFill} from 'react-icons/bs'
import {FiUsers} from 'react-icons/fi'
import {MdOutlineAssignmentTurnedIn} from 'react-icons/md'

const about = () => {
  return (
    <section id='about'>
    <h5>Get to know</h5>
    <h2>About me</h2>
    <div className='container about__container'>
      <div className='about__me'>
        <div className='about__me-image'>
          <img src={me} alt='about image'/>
        </div>
      </div>
      <div className='about__content'>
        <div className='about__cards'>
          <article className='about__card'>
              <BsAwardFill className='about__icon'/>
              <h5>Experience</h5>
              <small>Newbie</small>
          </article>
          <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>none</small>
          </article>
          <article className='about__card'>
              <MdOutlineAssignmentTurnedIn className='about__icon'/>
              <h5>Projects</h5>
              <small>3 completed</small>
          </article>
        </div>
        <p>
          lorem da sd sa das das asd asd asd dsa as daqwfdqdjqh q qw dqwkb kqhwbd jqkwbh kjdbh jkwqh
           dqwbhjd bqwh bdqw
            dqwhjdb qwjh
             qwdjhdb wq
              dwqbh wq
        </p>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>
    </section>
  )
}

export default about