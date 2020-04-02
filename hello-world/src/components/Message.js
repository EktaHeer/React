import React, { Component } from 'react';


class Message extends Component{

    constructor() {
        super()
        this.state ={
            message: "Gift for visitors"
        }
    }

    changeMessage(){
        this.setState({
            message:"April Fool :-) Thanks for visiting"
        })
    }
    render(){
return (
<div>
<h2>{this.state.message}</h2>
<button onClick ={() => this.changeMessage()}>Go here...</button>
</div>

)
}
}


export default Message;