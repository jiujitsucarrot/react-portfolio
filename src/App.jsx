import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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