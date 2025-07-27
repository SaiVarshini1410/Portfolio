import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import BusinessIcon from '@mui/icons-material/Business';
import SchoolIcon from '@mui/icons-material/School';
import Typography from '@mui/material/Typography';
import workExpJson from '../Utils/workExperience.json';
import './workExpCard.css';

function CustomizedTimeline() {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const timelineRef = useRef(null);

  const iconOptions = [
    <LaptopMacIcon />,
    <WorkIcon />,
    <CodeIcon />,
    <BusinessIcon />,
    <SchoolIcon />
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleItems(prev => new Set([...prev, index]));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    const timelineItems = document.querySelectorAll('.MuiTimelineItem-root');
    timelineItems.forEach((item, index) => {
      item.dataset.index = index;
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  const getIconForItem = (item, index) => {
    return <CodeIcon/>;
  };

  const formatTimeline = (timeline) => {
    return timeline;
  };

  return (
    <div className="workexp-tl-cls" ref={timelineRef}>
      <div className="workexp-title-cls">
        Work Experience
      </div>
      <Timeline position="alternate">
        {workExpJson.map((item, index) => (
          <TimelineItem 
            key={index}
            className={visibleItems.has(index) ? 'timeline-item-visible' : ''}
            style={{
              '--item-index': index,
              opacity: visibleItems.has(index) ? 1 : 0,
              transform: visibleItems.has(index) ? 'translateY(0)' : 'translateY(50px)',
              transition: 'all 0.8s ease'
            }}
          >
            <TimelineOppositeContent
              sx={{
                m: 'auto 0',
                textAlign: index % 2 === 0 ? 'right' : 'left',
                color: 'white',
              }}
              variant="body2"
            >
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: index % 2 === 0 ? 'flex-end' : 'flex-start',
                gap: '5px'
              }}>
                <span style={{ 
                  fontSize: '1.1rem', 
                  fontWeight: 'bold',
                  textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                }}>
                  {formatTimeline(item.timeline)}
                </span>
                {item.location && (
                  <span style={{ 
                    fontSize: '0.9rem', 
                    opacity: 0.8,
                    fontStyle: 'italic'
                  }}>
                    📍 {item.location}
                  </span>
                )}
              </div>
            </TimelineOppositeContent>
            
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot 
                color="primary"
                sx={{
                  boxShadow: visibleItems.has(index) 
                    ? '0 0 25px rgba(102, 126, 234, 0.6)' 
                    : '0 0 15px rgba(102, 126, 234, 0.4)',
                  transition: 'all 0.5s ease',
                  animationDelay: `${index * 0.2}s`,
                  alignContent:'center',

                }}
              >
                {getIconForItem(item, index)}
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            
            <TimelineContent
              sx={{
                py: '12px',
                px: 3,
              }}
            >
              <Typography 
                variant="h6" 
                component="div"
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: '10px',
                  flexWrap: 'wrap',
                  textAlign: 'left'
                }}
              >
                <span style={{ flex: 1 }}>
                  {item.company}
                </span>
                <span style={{ 
                  color: '#4ecdc4', 
                  fontSize: '1.1rem',
                  fontWeight: 'normal',
                  fontStyle: 'italic'
                }}>
                  {item.role}
                </span>
              </Typography>
              
              {item.description && (
                <Typography 
                  variant="body2" 
                  sx={{ 
                    mt: 1, 
                    color: '#b0b0b0 !important',
                    fontStyle: 'italic',
                    textAlign: 'left'
                  }}
                >
                  {item.description}
                </Typography>
              )}
              
              <div style={{ marginTop: '15px' }}>
                {item.experience.map((exp, idx) => (
                  <div
                    key={idx}
                    style={{
                      position: 'relative',
                      paddingLeft: '25px',
                      marginBottom: '12px',
                      color: '#f0f0f0',
                      lineHeight: '1.6',
                      transition: 'all 0.3s ease',
                      cursor: 'default'
                    }}
                    className="experience-item"
                    onMouseEnter={(e) => {
                      e.target.style.color = '#ffffff';
                      e.target.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = '#f0f0f0';
                      e.target.style.transform = 'translateX(0)';
                    }}
                  >
                    <span
                      style={{
                        position: 'absolute',
                        left: '0',
                        top: '0',
                        color: '#4ecdc4',
                        fontSize: '0.8rem',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      ▶
                    </span>
                    {exp}
                  </div>
                ))}
              </div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}

export default CustomizedTimeline;