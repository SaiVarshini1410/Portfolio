import React from 'react'
import './footer.css'
import gmailIcon from '../assets/gmail.png'
import linkedinIcon from '../assets/linkedin.png'
import githubIcon from '../assets/github.png'

function Footer() {
  return (
    <div  className='footer-mn-cls'>
      <div className='footer-col-text-cls'>
        Want to collaborate?
      </div>
      <div className='Icon-mn-cls'>
        <img src = { gmailIcon } alt = "gmail.png" width = '20' height = '20' className = 'gmailIcon-cls'/>
        <img src = { linkedinIcon } alt = "linkedinIcon" width = '20' height = '20' className = 'linkedinIcon-cls'/>
        <img src = { githubIcon } alt = "githubIcon" width = '50' height = '50' className = 'githubIcon-cls'/>
      </div>
    </div>
  )
}

export default Footer