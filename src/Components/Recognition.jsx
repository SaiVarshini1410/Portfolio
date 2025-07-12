// Recognition.jsx
import React from 'react';
import './recognition.css';

function Recognition() {
  // Sample recognition data - replace with your actual achievements
  const recognitionData = [
    {
      title: "Best Developer Award",
      organization: "IBM - World largest tech hub.",
      date: "2024",
      description: "Recognized for outstanding contribution to software development and team leadership.",
      type: "award",
    },
    {
      title: "Full Stack Development Certificate",
      organization: "Vasavi Tech Institute",
      date: "2023",
      description: "Completed full-stack development program with distinction.",
      type: "certificate",
    },
    {
      title: "Innovation Excellence",
      organization: "NEU Innovation Hub",
      date: "2023",
      description: "Awarded for developing innovative solutions that improved system efficiency by 40%.",
      type: "award",
    },
    {
      title: "Cloud Computing Certification",
      organization: "Cloud Platform",
      date: "2022",
      description: "Achieved professional level certification in cloud architecture and deployment.",
      type: "certificate",
    }
  ];

  return (
    <div className='recognition-mn-cls'>
      <div className='recognition-title-cls'>
        Recognition
      </div>
      <div className='recognition-grid-cls'>
        {recognitionData.map((item, index) => (
          <div key={index} className='recognition-card-cls'>
            <div className='recognition-icon-cls'>
              <img src={item.icon} alt={item.type} />
            </div>
            <div className='recognition-content-cls'>
              <div className='recognition-card-title-cls'>
                {item.title}
              </div>
              <div className='recognition-organization-cls'>
                {item.organization}
              </div>
              <div className='recognition-date-cls'>
                {item.date}
              </div>
              <div className='recognition-description-cls'>
                {item.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recognition;