import React, { Component } from 'react'
import axios from 'axios'

class Main extends Component{

    constructor(props){
        super(props)
        this.state = {
            msg: []
        }
    }

    componentDidMount(){
       axios.get('/xyz')
       .then(response=>{
           this.setState({msg:response.data.msg})
       })
       .catch(err=>{
           this.setState({msg:"Request failed"})
       })
    }

    render(){
        console.log("Main rendered: ",this.props.text)
        return(
            <div>
                Main
                <span>{this.state.msg.map(item=> item)}</span>
            </div>
        );
    }
}

export default Main