import React, { Component } from 'react'

class About extends Component{
    render(){
        console.log("About rendered: ",this.props.text)
        return(
            <div>
                About
            </div>
        );
    }
}

export default About