import React from 'react';
import Project from '../components/Project';

const Portfolio = () => {
    const projects = [
        {
            title: 'Dad A Base App',
            image: '/assets/images/project1.jpg',
            deployLink: 'https://rbracker.github.io/breakfastclub-project/',
            githubLink: 'https://github.com/rbracker/breakfastclub-project',
        },
        {
            title: 'FiendishlyCalm Meditation App',
            image: '/assets/images/project2.jpg',
            deployLink: 'https://obscure-oasis-48422-1d606ed83e3c.herokuapp.com/',
            githubLink: 'https://github.com/jishyk/FiendishlyCalm',
        },
    ];

    return (
        <div className="portfolio">
            <h2>Portfolio</h2>
            {projects.map((project, index) => (
                <Project key={index} {...project} />
            ))}
        </div>
    );
};

export default Portfolio;