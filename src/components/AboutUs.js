import React, { useState } from 'react'
import '../index.css'
import { people } from '../data/slideData'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
const AboutUs = () => {
  const [value, setValue] = useState(0)

  const { stars, work, info, img, name } = people[value]
  return (
    <section className='about-us'>
      <div className='about-us-cont'>
        <div className='about-text'>
          <h3>
            What They Think <span>About Us</span>
          </h3>
          <p>
            Suspendisse vitae laoreet mauris. Fusce a nisi dapibus, euismod
            purus non, convallis odio. Donec vitae magna ornare, pellentesque ex
            vitae, aliquet urna.
          </p>
        </div>
        <div className='slider'>
          <div className='slider-person'>
            <div className='div-slider-card'>
              <img src={img} alt={name} />
              <p className='slider-star text-center'>{stars}</p>
              <h3 className='text-center'>{name}</h3>
              <p className='text-center'>{info}</p>
              <p className='text-center'>{work}</p>
            </div>
          </div>
          <div className='slider-buttons'>
            <button className='slider-button-left'>
              <FaAngleLeft />
            </button>
            <button className='slider-button-right'>
              <FaAngleRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
