import React from 'react'

// ----------------------    Types of components  -----------------------
function Welcome() {
    return <h1>Functional Component, It is first type of components.<br />
    Make sure, while creating function name(component name) it should be start with capital letter. Otherwise its not working.</h1>
}

const Welcome = () => <h3>Make sure, while creating function name(component name) it should be start with capital letter. Otherwise its not working. <br />
 <b>1. Functional Component</b></h3>



//----------------------------   use of props  ---------------------------
 const Welcome = (props) => {
     return (
       <div className = "pets">
    <h1>Hi, {props.name} a.k.a {props.petname}</h1>
     {props.children}
     </div>



//----------------------------  destructring props as function parameter  ---------------------------
const Welcome = ({name, petname}) =>{
    return (
         <div className = "pets">
         <h1>Hi, {name} a.k.a {petname}</h1>
</div>
    )
}


 //----------------------------  destructring props as function body  ---------------------------

const Welcome =(props) => {
    const {name, petname} = props
    return(
        <div>
            <h1>Welcome, {name} a.k.a {petname}</h1>
        </div>
    )
}


export default Welcome