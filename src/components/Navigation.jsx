import React from 'react';
import { Link } from 'react-dom';

const Navigation = () => {
    return (
        <nav className="navigation">
            <Link to="/AboutMe">About Me</Link>
            <Link to="/Portfolio">Portfolio</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/Resume">Resume</Link>
        </nav>
    );
};

export default Navigation;