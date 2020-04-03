import React from 'react'


// this component is only responsible for rendering the HTML for component.
function PersonList({person}) {
    return (
        <div>
            <h3>My dog name is {person.name} and his age is {person.age} years. His color is {person.color}</h3>
        </div>
    )
}

export default PersonList
