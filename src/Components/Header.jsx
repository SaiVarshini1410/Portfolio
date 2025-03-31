import React, { useRef } from 'react'
import './header.css'
import Resume from '../assets/Resume.pdf'
import { Block } from '@mui/icons-material';
import { duration } from '@mui/material';

function Header() {
  
  function scrollToExperience(){
    const ele = document.getElementsByClassName('workexp-tl-cls');
    if( ele ){
      ele[0].scrollIntoView({
        behavior : 'smooth',
        block : 'start',
      });
    }
  }

  return (
    <div className='header-mn-cls'>
       <div className='pacifico-regular'>
          <a href='https://www.google.com'>
            Sai Varshini Thupakula
          </a>
        </div>
        <div className='header-rt-cls'>
          <div className='header-rt-ele'><a href={Resume} download='Varshini-Resume.pdf' className='header-rt-ele-lnk'>Resume</a></div>
          <div className='header-rt-ele' onClick={scrollToExperience}>Experience</div>
          <div className='header-rt-ele'>Skills</div>
          <div className='header-rt-ele'>Projects</div>
          <div className='header-rt-ele'>Recognition</div>
      </div>
    </div>
  )
}

export default Header;