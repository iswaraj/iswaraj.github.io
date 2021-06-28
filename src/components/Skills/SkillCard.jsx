import React from 'react';
import './Skills.css';
import Zoom from 'react-reveal/Zoom';

const SkillCard = ({ skillName, skillUrl }) => {
    return (
        <div className="skill">
       <Zoom>
            <img src={skillUrl}
                alt="skill"
            />
        </Zoom>
            <p>{skillName}</p>
        </div>
    );
}

export default SkillCard;