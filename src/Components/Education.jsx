import React, { useState, useEffect, useRef } from 'react';
import './education.css';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import educationJson from '../Utils/education.json'

function Education() {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const educationRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.dataset.index);
          if (entry.isIntersecting) {
            setVisibleItems(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.2 }
    );

    const items = educationRef.current?.querySelectorAll('.education-card-cls');
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);


  return (
    <div className="education-mn-cls" ref={educationRef}>
      <h2 className="education-title-cls">Education</h2>
      
      <div className="education-timeline-cls">
        {educationJson.map((education, index) => (
          <div 
            key={index}
            className={`education-card-cls ${visibleItems.has(index) ? 'visible' : ''}`}
            data-index={index}
            style={{ '--item-index': index }}
          > 
            <div className="education-card-content-cls">
              <div className="education-main-info-cls">
                <h3 className="education-degree-cls">{education.degree}</h3>
                <h4 className="education-field-cls">{education.field}</h4>
                <div className="education-institution-cls">
                  <span className="institution-name">{education.institution}</span>
                  <span className="institution-location">{education.location}</span>
                </div>
                <div className="education-duration-grade-cls">
                  <span className="duration">{education.duration}</span>
                  <span className="grade">{education.grade}</span>
                </div>
              </div>
              
              <div className="education-details-cls">
                <div className="coursework-section-cls">
                  <h5 className="section-title-cls">
                    <MenuBookIcon className="section-icon" />
                    Coursework
                  </h5>
                  <div className="coursework-tags-cls">
                    {education.coursework.map((course, idx) => (
                      <span key={idx} className="course-tag-cls">{course}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
