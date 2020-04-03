import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            {/* <button onClick ={props.greetHandler}>Check Parent</button> */}
            <button onClick ={() => props.greetHandler('child')}>Check Parent</button>
        </div>
    )
}

export default ChildComponent
