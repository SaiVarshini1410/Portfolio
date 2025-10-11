import React from 'react'
import './footer.css'
import gmailIcon from '../assets/gmail.png'
import linkedinIcon from '../assets/linkedin.png'
import githubIcon from '../assets/github.png'
// import './responsive-updates.css'

function Footer() {
  return (
    <div  className='footer-mn-cls'>
      <div className='footer-col-text-cls'>
        Want to collaborate?
      </div>
      <div className='Icon-mn-cls'>
        <a href = 'mailto:saivarshinithupakula@gmail.com' target='__blank'><img src = { gmailIcon } alt = "gmail.png" width = '20' height = '20' className = 'gmailIcon-cls'></img></a>
        <a href = 'https://www.linkedin.com/in/saivarshinithupakula/' target='__blank'><img src = { linkedinIcon } alt = "linkedinIcon" width = '20' height = '20' className = 'linkedinIcon-cls'/></a>
        <a href = 'https://github.com/SaiVarshini1410' target='__blank'><img src = { githubIcon } alt = "githubIcon" width = '50' height = '50' className = 'githubIcon-cls'/></a>
      </div>
    </div>
  )
}

export default Footer