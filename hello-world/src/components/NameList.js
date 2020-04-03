import React from 'react'
import PersonList from './PersonList';

function NameList() {
    // const names = ['Rickson', 'Brabus', 'Scooby']
    // const nameList = names.map(name => <h2>{name}</h2>)
    // return (
    //     <div>
    //         {
    //         /* { names.map(name => <h2>{name}</h2>) } */
            
    //         nameList
    //         }

    //     </div>
    // )


    const person = [
        {
            id:1,
            name: 'Rickson',
            age: 5,
            color: 'Black and Grey'
        },

        {
            id:2,
            name: 'Brabus',
            age: 6,
            color: 'White and Brown'
        },

        {
            id:3,
            name: 'Scooby',
            age: 2,
            color: 'White'
        }
    ]

//const personList = person.map(person =>(<h3>My dog name is {person.name} and his age is {person.age} years. His color is {person.color}</h3>))

// ----------- This component is only responsible for the rendering the list -----------
//const personList = person.map(person => <PersonList  person= {person}/>)


// ------ Key property used to provide unique identity to list item
const personList = person.map(person => <PersonList key={person.id} person= {person}/>)
return <div>{personList}</div>


}
// ------- use of index as key  --------------
// const names = ['Rickson', 'Brabus', 'Scooby']
// const nameList = names.map((name,index) => <h2 key = {index}>{index} {name}</h2>)
        
// return <div>{nameList}</div>
// }

export default NameList
