import React from 'react';

const HelloJSX = () => {
    return (
        // using jsx 
        <div className="dummyclass"><h1>Heading tag using JSX</h1></div>
    )
// return React.createElement('div', null, 'Without JSX not accepting heading attribute')
 return React.createElement('div', {id: 'hello', className:'dummyclass'}, React.createElement('h1', null, 'Without JSX heading tag' ))

}

export default HelloJSX;