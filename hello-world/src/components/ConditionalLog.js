import React, { Component } from 'react'

class ConditionalLog extends Component {
constructor(props) {
    super(props)

    this.state = {
         isLoggedIn: true
    }
}


    render() {

// -------------------------  if/else conditional rendering  ---------------------------------        
// if(this.state.isLoggedIn){
//     return (
//         <div>
//            Hello Ekta 
//         </div>
//     )
// }else{
//         return (
//             <div>
//                Hello Guest 
//             </div>
//         )
//     }


// -------------------------  Element variable conditional rendering  --------------------------------- 
// let message
// if(this.state.isLoggedIn){
//     message = <div>Hello Ekta</div>
// }else{
//     message = <div>Hello Guest</div>
// }
// return <div>{message}</div>


// ---------------------  Ternary Conditional Operator  -------------------------------
// return this.state.isLoggedIn ? (<div>Welcome, Ekta</div>) : (<div>Welcome, Guest</div>)


// --------------------- Short Circuit Operator  -----------------------
return this.state.isLoggedIn && (<div>Welcome, Ekta</div>)

}
}
export default ConditionalLog
