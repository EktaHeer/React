import React, {Component} from 'react';

 class Greet extends Component{
    render(){
        return <h3><b>2. Class component</b></h3>
    }
}


// ------------------  use of props   -------------
class Greet extends Component{
    render(){
        return( 
        <div className ="pets">
        <h3>Hello, {this.props.name} a.k.a {this.props.petname}</h3>
        {this.props.children}
        </div>
        )
    }
}


// ------------------  destructring of props/state in class component   -------------
class Greet extends Component{
    render(){
        const {name, petname} = this.props
        //const(name) = this.state
        return( 
        <div className ="pets">
        <h2>Greetings, {name} a.k.a {petname}</h2>
        
        </div>
        )
    }
}

export default Greet;

// enable the extension ES7 React/Redux/GraphQL/React-Native snippets for class component structure auto---- type rce, it will auto create structure (visual studio code editor) 