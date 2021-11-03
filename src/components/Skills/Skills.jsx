import React from 'react';
import FooterLink from '../FooterLink/FooterLink';
import Header from '../Header/Header';
import './Skills.css';
import skillsVector from './../../assets/skills_vector.png'
import { skillList } from './../../assets/skillsData';
import SkillCard from './SkillCard';


const Skills = () => {
    return (
        <div className='section-container'>
            < Header
                heading="My Skills"
                details=" "
            />

            {/* <div className="my-resume">
                <h2 className="my-resume-heading">
                    Click &nbsp;
                    <a href="https://drive.google.com/drive/folders/1BCPtVYge5c4aM4Lk2LyuldH46E3DUbZx?usp=sharing">
                        <img src="https://image.flaticon.com/icons/png/512/4954/4954298.png" alt="resume" className="resume-button" />
                    </a>
                    &nbsp;  to download my resume
                </h2>

            </div> */}

            <div className="skill-card-container">
                {
                    skillList.map(({ skillName, skillUrl }) => {
                        // const {skillName, skillUrl}=skill;
                        // const skillName = skill.skillName;
                        // const skillUrl = skill.skillUrl;
                        // return <h1>{skill.skillName}</h1>
                        return < SkillCard skillName={skillName} skillUrl={skillUrl} />
                    })
                }

            </div>

            < FooterLink
                phrase="Get in " link="touch." toAdress="/contact"
            />

            <div className="skills-vector-frame">
                <img
                    src={skillsVector}
                    alt="skills"
                    className="skills-vector"
                />
            </div>
        </div>
    );
}

export default Skills;