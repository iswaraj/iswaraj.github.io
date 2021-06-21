import React from 'react';
import FooterLink from '../FooterLink/FooterLink';
import Header from '../Header/Header';
import './Projects.css';
import { projectsData } from './../../assets/projectsData';
import ProjectCard from './ProjectCard';

const Projects = () => {
    return (
        <div className='section-container'>
            < Header
                heading="My projects in short"
                details=" "

            />

            <div className="project-cards-container">
                {projectsData.map(({
                    projectName,
                    projectDescription,
                    imageUrl,
                    videoUrl,
                    projectUrl

                }) => {
                    return < ProjectCard
                        projectName={projectName}
                        projectDescription={projectDescription}
                        imageUrl={imageUrl}
                        videoUrl={videoUrl}
                        projectUrl={projectUrl}

                    />
                })}
            </div>

            < FooterLink
                phrase="Check out "
                link="my Skills"
                toAdress="/skills"
            />
            {/* <h1>I am the projects page</h1> */}
        </div>
    );
}

export default Projects;