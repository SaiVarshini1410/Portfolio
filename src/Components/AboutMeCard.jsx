import React from 'react'
import aboutMe from '../Utils/aboutMe.json'
import './aboutMeCard.css'

function AboutMeCard() {
  return (
    <div className='card-mn-cls'>
      <div className='aboutMeCard-mn-cls'>
        {aboutMe.aboutMe}
      </div>
    </div>
  )
}

export default AboutMeCard