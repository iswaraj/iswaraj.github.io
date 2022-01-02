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
                details="| GATE Qualified | CSE '22 | Incoming Advanced ASE @ Accenture | National Topper @ Cognizant (Drive) | Ex-Intern @ TCS | 91%+@ TCS NQT | Web | Java | GIT | SQL | Cloud | 8.5k+ Connections @ Linkedin |"
            />

            <div className="about-main">
                <div className="about-main-left">
                    {/* subsection 1*/}
                    <h3 className='about-sub-head'>About</h3>
                    <p className='about-details'>
                        I am Swaraj, a final year CSE Undergrad. I like to play with
                        new technologies.
                        My hometown is Bankura, W.B. 
                    </p>
                    <br/>
                    {/* can add more subsections here */}
                    <h3 className='about-sub-head'>Achievements</h3>
                    <li className="normal-font">GATE 2021 Qualified at Pre-final Year.</li>
                    <li className="normal-font">National Top Learner (Rank 1) among the 20000+ participants from different colleges of India from the 
                        second week of Cognizant Digital Nurture (National level Pre-Placement on-campus hiring by CTS) till the    
                        end. And completed the whole learning material of 160 hours in two weeks.
                    </li>
                    <li className="normal-font">91.57% (1648.30/1800) in TCS NQT 2021(Feb) and87.6% (1576/1800) in TCS NQT 2020(Oct)
                    </li>
                    <li className="normal-font">50+ MOOCS Courses on COURSERA on different domains i.e., JAVA, Python, Web Development, Cyber Security, Big Data, Block Chain, GCP, AWS etc.</li>
                    <li className="normal-font">Placement offers from Accenture (Advanced ASE), Cognizant (GenC Elevate), Infosys (System Engineer), Wipro (Project Engineer), Revature. </li>



                </div>
                <div className="about-main-right">
                    {/* added animation */}
                    <img src={aboutAnime}
                        alt="animation"
                        className="about-anime"
                    />

                </div>
            </div>

            <div>
                

            <h3 className='acad-sub-head about-sub-head'>Academics</h3>
                    <table class="styled-table flex-table">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">College/School</th>
                            <th scope="col">Degree</th>
                            <th scope="col">University/Board</th>
                            <th scope="col">CGPA/Percentage</th>
                            <th scope="col">Year of Passing</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">1</th>
                            <td data-label="College">B P Poddar Institute of Management and Technology,Kolkata, W.B</td>
                            <td data-label="Degree">B. Tech. in Computer Science and Engineering</td>
                            <td data-label="University">MAKAUT(Formerly WBUT)</td>
                            <td data-label="CGPA">8.897 (Avg. till 6th Semester)</td>
                            <td data-label="Year of Passing">2022[Expected]</td>
                            </tr>
                            <tr>
                            <th scope="row">2</th>
                            <td data-label="School">Bankura Zilla School,Bankura, W.B.</td>
                            <td data-label="Degree">Higher Secondary Examination (12th) </td>
                            <td data-label="Board">WBCHSE</td>
                            <td data-label="Percentage">86.60 &#37;</td>
                            <td data-label="Year of Passing">2017</td>
                            </tr>
                            <tr>
                            <th scope="row">3</th>
                            <td data-label="School">Purulia M. M. High School,Purulia, W.B.</td>
                            <td data-label="Degree">Madhyamik Examination (10th)</td>
                            <td data-label="Board">WBBSE</td>
                            <td data-label="Percentage">93.14 &#37;</td>
                            <td data-label="Year of Passing">2015</td>
                            </tr>
                        </tbody>
                    </table>
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