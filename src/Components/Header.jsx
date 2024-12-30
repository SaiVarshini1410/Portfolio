import React from 'react'
import './header.css'

function Header() {
  return (
    <div className='header-mn-cls'>
       <div className='pacifico-regular'>
          <a href='https://www.google.com'>
            Sai Varshini Thupakula
          </a>
        </div>
        <div className='header-rt-cls'>
          <div className='header-rt-ele'>Resume</div>
          <div className='header-rt-ele'>Experience</div>
          <div className='header-rt-ele'>Skills</div>
          <div className='header-rt-ele'>Projects</div>
          <div className='header-rt-ele'>Contact</div>
      </div>
    </div>
  )
}

export default Header;