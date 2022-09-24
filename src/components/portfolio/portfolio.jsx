import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/assets/portfolio1.jpg'
import IMG2 from '../../assets/assets/portfolio2.jpg'
import IMG3 from '../../assets/assets/portfolio3.jpg'
import IMG4 from '../../assets/assets/portfolio4.jpg'
import IMG5 from '../../assets/assets/portfolio5.png'
import IMG6 from '../../assets/assets/portfolio6.jpg'

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h3>Portfolio</h3>
      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt=''/>
          </div>
          <h3>This is Portfolio Item Title</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com' className='btn' target='_blank'>Github</a>
          <a href='https://dribbble.com' className='btn btn-primary' target='_blank'>LiveDemo</a>
          </div>  
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt=''/>
          </div>
          <h3>This is Portfolio Item Title</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com' className='btn' target='_blank'>Github</a>
          <a href='https://dribbble.com' className='btn btn-primary' target='_blank'>LiveDemo</a>
          </div>  
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt=''/>
          </div>
          <h3>This is Portfolio Item Title</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com' className='btn' target='_blank'>Github</a>
          <a href='https://dribbble.com' className='btn btn-primary' target='_blank'>LiveDemo</a>
          </div>  
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt=''/>
          </div>
          <h3>This is Portfolio Item Title</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com' className='btn' target='_blank'>Github</a>
          <a href='https://dribbble.com' className='btn btn-primary' target='_blank'>LiveDemo</a>
          </div>  
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt=''/>
          </div>
          <h3>This is Portfolio Item Title</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com' className='btn' target='_blank'>Github</a>
          <a href='https://dribbble.com' className='btn btn-primary' target='_blank'>LiveDemo</a>
          </div>  
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt=''/>
          </div>
          <h3>This is Portfolio Item Title</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com' className='btn' target='_blank'>Github</a>
          <a href='https://dribbble.com' className='btn btn-primary' target='_blank'>LiveDemo</a>
          </div>  
        </article>
      </div>
    </section>
  )/*target='_blank' is used to open link in a new tab*/
}

export default portfolio