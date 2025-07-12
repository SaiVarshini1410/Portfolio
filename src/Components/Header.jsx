import React, { useRef, useState, useEffect } from 'react'
import './header.css'
import Resume from '../assets/Resume.pdf'
import { Block } from '@mui/icons-material';
import { duration } from '@mui/material';
// import './responsive-updates.css'

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  function scrollToElement(ele){
    ele[0].scrollIntoView({
      behavior : 'smooth',
      block : 'start',
    });
  }
  
  function scrollToExperience(){
    const ele = document.getElementsByClassName('workexp-tl-cls');
    if( ele ){
      scrollToElement(ele);
    }
    closeMobileMenu();
    return;
  }

  function scrollToSkills(){
    const ele = document.getElementsByClassName('skills-mn-cls');
    if( ele ){
      scrollToElement(ele);
    }
    closeMobileMenu();
    return;
  }

  function scrollToProjects(){
    const ele = document.getElementsByClassName('projectCard-mn-cls');
    if( ele ){
      scrollToElement(ele);
    }
    closeMobileMenu();
    return;
  }

  function scrollToRecognition(){
    const ele = document.getElementsByClassName('recognition-mn-cls');
    if( ele ){
      scrollToElement(ele);
    }
    closeMobileMenu();
    return;
  }

  function toggleMobileMenu() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  function closeMobileMenu() {
    setIsMobileMenuOpen(false);
  }

  function handleResumeDownload() {
    closeMobileMenu();
  }

  // Close mobile menu when clicking outside
  useEffect(() => {
    function handleOutsideClick(event) {
      if (isMobileMenuOpen && 
          !event.target.closest('.mobile-menu') && 
          !event.target.closest('.hamburger-menu')) {
        closeMobileMenu();
      }
    }

    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <div className='header-mn-cls'>
        <div className='pacifico-regular'>
          <a href='https://www.google.com'>
            Sai Varshini Thupakula
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <div className='header-rt-cls'>
          <div className='header-rt-ele'>
            <a href={Resume} download='Varshini-Resume.pdf' className='header-rt-ele-lnk'>
              Resume
            </a>
          </div>
          <div className='header-rt-ele' onClick={scrollToExperience}>
            Experience
          </div>
          <div className='header-rt-ele' onClick={scrollToSkills}>
            Skills
          </div>
          <div className='header-rt-ele' onClick={scrollToProjects}>
            Projects
          </div>
          <div className='header-rt-ele' onClick={scrollToRecognition}>
            Recognition
          </div>
        </div>

        {/* Hamburger Menu Button */}
        <div 
          className={`hamburger-menu ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
        >
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={closeMobileMenu}
      ></div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-items">
          <div className="mobile-menu-item">
            <a 
              href={Resume} 
              download='Varshini-Resume.pdf' 
              onClick={handleResumeDownload}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              Resume
            </a>
          </div>
          <div className="mobile-menu-item" onClick={scrollToExperience}>
            Experience
          </div>
          <div className="mobile-menu-item" onClick={scrollToSkills}>
            Skills
          </div>
          <div className="mobile-menu-item" onClick={scrollToProjects}>
            Projects
          </div>
          <div className="mobile-menu-item" onClick={scrollToRecognition}>
            Recognition
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;