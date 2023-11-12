import React from 'react';

const Resume = () => {
    return (
        <div className="resume">
            <h2>Resume</h2>
            <p>
                Download my resume:{' '}
                <a href="/assets/resume.pdf" download>Resume.pdf</a>
            </p>
            <h3>Proficiencies</h3>
            <ul>
                <li>React.js</li>
                <li>MERN</li>
                <li>Node.js</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Vanilla.js</li>
                <li>API's</li>
                <li>Freelance</li>
            </ul>
        </div>
    );
};

export default Resume;