import React, { Component } from 'react'

class Contact extends Component{
    render(){
        console.log("Contact rendered: ",this.props.text)
        return(
            <div>
                Contact
            </div>
        );
    }
}

export default Contact