import React, { Component } from 'react'
import {Router, Route} from 'react-router'
import { createBrowserHistory } from "history";
import Navigation from './Navigation'
import Main from './Main'
import Contact from './Contact'
import About from './About'

const history = createBrowserHistory();

class Home extends Component{
    render(){
        return(
            <div style={{margin:"200px"}}>
                Home
                <Router history={history}>
                    <Navigation/>
                    <Route exact path='/' component={Main}/>
                    <Route path="/home" component={Main}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/about" component={About}/>
                </Router>
            </div>
        );
    }
}

export default Home