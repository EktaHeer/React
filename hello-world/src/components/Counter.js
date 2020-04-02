import React, { Component } from 'react'

class Counter extends Component {

constructor(props){
    super(props)
    this.state= {
        count: 0
    }
}

Increment(){
    // this.setState({
    //     count: this.state.count + 1
    // })

    this.setState((prevState) => ({
        count: prevState.count + 1
    }))
}


IncrementThree(){
    this.Increment();
    this.Increment();
    this.Increment();
    this.Increment();

}
    render() {
        return (
            <div>
               <div>Count- {this.state.count}</div> 
               {/* <button onClick = {() => this.Increment()}>Increment</button> */}
               <button onClick = {() => this.IncrementThree()}>Increment</button>
            </div>
        )
    }
}

export default Counter
