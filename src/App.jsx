import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

const App = () => {
    return (
        <Router>
            <Header />
            <Navigation />
                <Route path="/AboutMe" exact component={AboutMe} />
                <Route path="/Portfolio" exact component={Portfolio} />
                <Route path="/Contact" exact component={Contact} />
                <Route path="/Resume" exact component={Resume} />
            <Footer />
        </Router>
    );
};

export default App;