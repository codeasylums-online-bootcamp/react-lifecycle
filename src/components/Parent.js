import React, { Component } from 'react'
import Child from './Child'

class Parent extends Component{

    constructor(props){
        super(props)
        console.log("parent constructor")
        this.state = {
            default: "",
            showChild: true
        }
    }

    static getDerivedStateFromProps(props,state){
        console.log("parent getDerivedStateFromProps",props,state)
        if(state.default===""){
            const newState = {...state,default:props.name}
            return newState
        }
        else{
            return null
        }
    }

    update = () => {
        this.setState({default:"zxcvbnm"})
    }

    toggleChild = () => {
        this.setState({...this.state,showChild:!this.state.showChild})
    }

    render(){
        console.log("parent render",this.state)
        return(
            <div style={{margin:"200px"}}>
                Parent
                {this.state.showChild===true && <Child defaultValue={this.state.default}/>}
                <button onClick={this.update}>Update</button>
                <button onClick={this.toggleChild}>Toggle</button>
            </div>
        );
    }

    static getDerivedStateFromError(error){
        console.log("parent getDerivedStateFromError",error)
        return {showChild:false}
    }

    componentDidMount(){
        console.log("parent componentDidMount")
    }
}

export default Parent