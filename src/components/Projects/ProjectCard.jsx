import React from 'react';
import './Projects.css';
import Bounce from 'react-reveal/Bounce';
const ProjectCard = ({
    projectName,
    projectDescription,
    imageUrl,
    // videoUrl,
    projectUrl

}) => {
    return (
        <Bounce bottom>
        <div className="project-card">
            <div className="image-container">
                <a href={projectUrl} className="project-external-link">
                    <img
                        src={imageUrl}
                        alt='project'
                        className='project-image'
                    />
                </a>
            </div>

            <div className='project-details-container'>
                <h2 className='project-heading'>{projectName}</h2>
                <p className='project-details'>{projectDescription}</p>
                {/* <a href={videoUrl} className='project-yt-link'>
                    Watch More!
                </a> */}
            </div>
        </div>
        </Bounce>
    );
}

export default ProjectCard;