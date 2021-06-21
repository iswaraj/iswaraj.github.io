import React from 'react';
import Header from '../Header/Header';
import FooterLink from '../FooterLink/FooterLink';
import './About.css';
import aboutVector from './../../assets/about_vector.png';
import aboutAnime from './../../assets/about_anime.gif';


const About = () => {
    return (
        <div className='section-container'>
            {/* <h1>I am the about page</h1> */}
            < Header
                heading="Who Am I"
                details="|GATE Qualified|Pre-final Year CSE Undergrad|Java Developer|SQL|GCP AWS|Web-Dev|"
            />

            <div className="about-main">
                <div className="about-main-left">
                    {/* subsection 1*/}
                    <h3 className='about-sub-head'>About</h3>
                    <p className='about-details'>
                        I am Swaraj Khan, Pre-final year CS Undergrad. I like to play with
                        new technologies.
                        {' '}
                        {/* </p>
                    <p className="about-details"> */}
                        <br />
                        My hometown is Bankura. I am currently studying B.Tech. in
                        Computer Science and Engineering  at B. P. Poddar Institute
                        of Management and Technology. I have completed my 12th from
                        Bankura Zilla School and 10th from Purulia M. M. High School.
                    </p>
                    {/* can add more subsections here */}

                </div>
                <div className="about-main-right">
                    {/* added animation */}
                    <img src={aboutAnime}
                        alt="animation"
                        className="about-anime"
                    />

                </div>
            </div>

            < FooterLink
                phrase="Check out my"
                link="projects"
                toAdress="/projects" />

            {/* Vector frame */}
            <div className="vector-frame">
                <img src={aboutVector} className='about-vector' alt="about" />
            </div>

        </div>
    );
}

export default About;