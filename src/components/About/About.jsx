import React from 'react';
import Header from '../Header/Header';
import FooterLink from '../FooterLink/FooterLink';
import './About.css';
import aboutVector from './../../assets/about_vector.png';
import aboutAnime from './../../assets/about_anime.gif';
import Bounce from 'react-reveal/Bounce';


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
                    <Bounce left>
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
                        <br />
                        I have good knowledge in languages like java, c# , html, css, javascript. I am pretty familier with
                        Git and Github version control system.
                        I have some knowledge in the fields of Cloud Computing (including Amazon Web Services and Google
                        Cloud Platform),cyber security, microsoft office. I have used OS like windows, ubuntu, kali linux, linux mint.
                        Besides I am a good photographer and also photo and video editor.
                        I am a keen learner and for that purpose I like to do courses in spare time.
                        I have done more than 50 courses from Coursera including specialization on MERN stack, Cyber Security, AWS, Java, GCP.
                    </p>
                    {/* can add more subsections here */}
                    </Bounce>
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
                phrase="Check out my "
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