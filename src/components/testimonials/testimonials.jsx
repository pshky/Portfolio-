import React from 'react'
import './testimonials.css'
import AVA1 from '../../assets/assets/avatar1.jpg'
import AVA2 from '../../assets/assets/avatar2.jpg'
import AVA3 from '../../assets/assets/avatar3.jpg'
import AVA4 from '../../assets/assets/avatar4.jpg'
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    id:1,
    avatar: AVA1,
    name: 'Tina Mendes',
    review: 'dsad sa dsa dsa dsa dasdsa d asd asd wq qwd jkldnwq dnwqo ndwoqndo wq oiuh oi dqwoi oiqw'
  },
  {
    id:2,
    avatar: AVA2,
    name: 'Tina Mendes',
    review: 'dsad sa dsa dsa dsa dasdsa d asd asd wq qwd jkldnwq dnwqo ndwoqndo wq oiuh oi dqwoi oiqw'
  },
  {
    id:3,
    avatar: AVA3,
    name: 'Tina Mendes',
    review: 'dsad sa dsa dsa dsa dasdsa d asd asd wq qwd jkldnwq dnwqo ndwoqndo wq oiuh oi dqwoi oiqw'
  },
  {
    id:4,
    avatar: AVA4,
    name: 'Tina Mendes',
    review: 'dsad sa dsa dsa dsa dasdsa d asd asd wq qwd jkldnwq dnwqo ndwoqndo wq oiuh oi dqwoi oiqw'
  },
]
const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className='container testimonials__container'
      // install Swiper modules
      modules={[ Pagination ]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({id,avatar,name,review}) => {
          return (
          <SwiperSlide key={id} className='testimonial'>
          <div className='client__avatar'>
            <img src={avatar} alt={name}/>
          </div>
            <h5 className='client__name'>{name}</h5>
            <small className='client__review'>{review}</small>
        </SwiperSlide>
          )
          })
        }
      </Swiper>
    </section>
  )
}

export default testimonials