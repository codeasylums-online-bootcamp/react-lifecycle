import React, { Component } from 'react'

class Child extends Component{

    constructor(props){
        super(props)
        console.log("child constructor",props)
        this.state = {
            defaultValue : ""
        }
    }

    static getDerivedStateFromProps(props,state){
        console.log("child getDerivedStateFromProps",props,state)
        const newState = {...state,defaultValue:props.defaultValue}
        return newState
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log("child shouldComponentUpdate",nextProps,nextState)
        return this.state.defaultValue !== nextState.defaultValue
    }

    changeHandler = (e) => {
        this.setState({defaultValue:e.target.value})
    }

    render(){
        console.log("child render",this.state)
        return(
            <div>
                <input value={this.state.defaultValue} onChange={this.changeHandler}/>

            </div>
        );
    }

    componentDidUpdate(prevProps, prevState){
        console.log("child componentDidUpdate",prevProps,prevState)
        if (prevProps.defaultValue!==this.props.defaultValue){
            // some operation
        }
    }

    componentWillUnmount(){
        console.log("child componentWillUnmount")
    }
}

export default Child