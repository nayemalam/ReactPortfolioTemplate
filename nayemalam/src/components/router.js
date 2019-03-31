import React from 'react';
import {Switch, Route} from 'react-router-dom';
// import all pages
import Home from './home';
import About from './about';
import Portfolio from './portfolio';
import Media from './media';
import Speaking from './speaking'
import Contact from './contact'

const Router = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/media" component={Media} />
        <Route path="/speaking" component={Speaking} />
        <Route path="/contact" component={Contact} />


    </Switch>
)

export default Router;