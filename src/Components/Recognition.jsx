// Recognition.jsx
import React from 'react';
import './recognition.css';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

function Recognition() {
  const recognitionData = [
    {
        title: "International Math Olympiad",
        organization: "IMO - Official",
        date: "2016",
        description: "Scored 90%+, showcasing early aptitude in problem-solving and logical reasoning..",
        type: "award",
    },
    {
        title: "TechGig Geek Goddess",
        organization: "GeekforGeeks",
        date: "2023",
        description: "Scored a perfect 200/200, showcasing strength in problem-solving under pressure.",
        type: "award",
    },
    {
        title: "CodeKaze",
        organization: "Coding Ninjas",
        date: "2022",
        description: "Ranked 12th at college level, proving coding proficiency in a competitive space.",
        type: "award",
    },
    {
        title: "IBM Digital Credentials",
        organization: "IBM - ISDL",
        date: "2024",
        description: "Earned WatsonX Essentials and AIX Systems Administrator badges.",
        type: "award",
    },
    {
        title: "Star of the month(x7)",
        organization: "IBM - ISDL",
        date: "2023-2024",
        description: "Recognized repeatedly at IBM for delivering impact and going beyond the call of duty",
        type: "award",
    },
    {
        title: "Athlete of the quarter",
        organization: "High school",
        date: "2015",
        description: "Recognized across all school branches for athletic excellence and leadership in competitions.",
        type: "award",
    },
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
            <div className='recognition-icon-cls'>
                <EmojiEventsIcon style={{ fontSize: '40px', color: '#f4c10f' }} /> 
            </div>
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