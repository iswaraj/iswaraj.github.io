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

            <div className="certificate-container normal-font">
                <h3 className="certificate-sub-head">Major Certification </h3>
                <p>[Click to verify]</p>
                <li><a href="https://www.coursera.org/account/accomplishments/specialization/certificate/FBME4PBDWSFE">Web Design for Everybody: Basics of Web Development &amp; Coding Specialization (Coursera &amp; University of Michigan)</a></li>
                <li><a href="https://www.coursera.org/account/accomplishments/certificate/N2AJEWHPM7MT">Java Programming: Solving Problems with Software (Coursera &amp; Duke University)</a></li>
                <li><a href="https://www.coursera.org/account/accomplishments/certificate/9YZSMU7T4GYZ">SQL for Data Science (Coursera &amp; University of California, Davis)</a></li>
                <li><a href="https://www.coursera.org/account/accomplishments/specialization/certificate/PCCANQ99UHTU">Full-Stack Web Development with React (Coursera &amp; The Hong Kong University of Science and Technology)</a></li>
                <li><a href="https://www.coursera.org/account/accomplishments/certificate/ESESE9E2496A">Java for Android (Coursera &amp; Vanderbilt University)</a></li>
                <li><a href="https://www.coursera.org/account/accomplishments/specialization/certificate/AGTKPVXUDNV6">AWS Fundamentals Specialization (Coursera &amp; AWS)</a></li>
                <li><a href="https://www.coursera.org/account/accomplishments/certificate/MC79HDZD9DFV">Google Cloud Platform Big Data and Machine Learning Fundamentals (Coursera &amp; Google Cloud)</a></li>
                <li><a href="https://www.coursera.org/account/accomplishments/specialization/certificate/PARQBRP2593T">Cybersecurity for Business Specialization (Coursera &amp; University of Colorado System)</a></li>
                <li><a href="https://www.coursera.org/account/accomplishments/certificate/RHTL95YAWJKB">Blockchain Basics (Coursera &amp; University at Buffalo, The State University of New York)</a></li>
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