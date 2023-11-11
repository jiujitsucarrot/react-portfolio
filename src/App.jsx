import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header.jsx';
import Navigation from './components/Navigation.jsx';
import AboutMe from './components/AboutMe.jsx';
import Portfolio from './components/Portfolio.jsx';
import Contact from './components/Contact.jsx';
import Resume from './components/Resume.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
    return (
        <Router>
            <Header />
            <Navigation />
            <Switch>
                <Route path="/" exact component={AboutMe} />
                <Route path="/" exact component={Portfolio} />
                <Route path="/" exact component={Contact} />
                <Route path="/" exact component={Resume} />
            </Switch>
            <Footer />
        </Router>
    );
};

export default App;