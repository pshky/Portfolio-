import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/assets/portfolio1.jpg'
import IMG2 from '../../assets/assets/portfolio2.jpg'
import IMG3 from '../../assets/assets/portfolio3.jpg'
import IMG4 from '../../assets/assets/portfolio4.jpg'
import IMG5 from '../../assets/assets/portfolio5.png'
import IMG6 from '../../assets/assets/portfolio6.jpg'

const data=[
  {
    id: 1,
    image: IMG1,
    title: 'Crypto Currency Dashboard',
    github: 'www.github.com',
    demo: 'www.dribbble.com'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Crypto Currency Dashboard',
    github: 'www.github.com',
    demo: 'www.dribbble.com'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Crypto Currency Dashboard',
    github: 'www.github.com',
    demo: 'www.dribbble.com'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Crypto Currency Dashboard',
    github: 'www.github.com',
    demo: 'www.dribbble.com'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Crypto Currency Dashboard',
    github: 'www.github.com',
    demo: 'www.dribbble.com'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Crypto Currency Dashboard',
    github: 'www.github.com',
    demo: 'www.dribbble.com'
  }
]
const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h3>Portfolio</h3>
      <div className='container portfolio__container'>
        {
          data.map(({id,image,title,github,demo}) =>{
            return(
              <article key={id} className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={image} alt={title}/>
          </div>
          <h3>{title}</h3>
          <div className='portfolio__item-cta'>
          <a href={github} className='btn' target='_blank'>Github</a>
          <a href={demo} className='btn btn-primary' target='_blank'>LiveDemo</a>
          </div>  
        </article>
            )
          })
        }
      </div>
    </section>
  )/*target='_blank' is used to open link in a new tab*/
}

export default portfolio