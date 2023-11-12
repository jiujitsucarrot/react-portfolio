import React from 'react';

const Project = ({ title, image, deployLink, githubLink }) => {
    return (
        <div className="project">
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <a href={deployLink} target="_blank" rel="noopener noreferrer">Deployed Link</a>
            <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
        </div>
    );
};

export default Project;