import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import Typography from '@mui/material/Typography';
import workExpJson from '../Utils/workExperience.json';
import './workExpCard.css'

function CustomizedTimeline() {

    return (
        <div className='workexp-tl-cls'>
            <div className='workexp-title-cls'>
                Work Experience
            </div>
        <Timeline position="alternate">
        {
            workExpJson.map((item)=>(
                <TimelineItem>
                    <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="text.secondary"
                    >
                    {item.timeline}
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary">
                        <LaptopMacIcon />
                    </TimelineDot>
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span">
                        {item.company}
                    </Typography>
                    <Typography>{item.experience}</Typography>
                    </TimelineContent>
                </TimelineItem>
            ))
        }
        </Timeline>
    </div>
  );
}

export default CustomizedTimeline;
