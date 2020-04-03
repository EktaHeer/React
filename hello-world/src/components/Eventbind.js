import React, { Component } from 'react'

class Eventbind extends Component {
constructor(props) {
    super(props)

    this.state = {
         message: "Hello, Event binding"
    }

    //  ----------- Binding Eventhandler in constructor method  ---------------

     this.clickHandler = this.clickHandler.bind(this)
}
clickHandler(){
    this.setState({
        message:"Great! You got it"
})
}

// ------------------ using class property as assrow function ------------------

// clickHandler = () =>{
//     this.setState({
//         message: "Great! You got it"
//     })
// }

// ----------- Binding Eventhandler in render method  ---------------
    render() {
        return (
            <div>
               <div> {this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>BindClick</button>     */}
                {/* <button onClick={() => this.clickHandler()}>AFClick</button>    */}
                <button onClick = {this.clickHandler}>ClassClick</button>
            </div>
        )
    }
}

export default Eventbind
