import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Navigation extends Component{
    
    render(){
        console.log("Navigation rendered")
        return(
            <div>
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        );
    }
}

export default Navigation