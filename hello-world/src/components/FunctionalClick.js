import React from 'react';

function FunctionalClick(){
   function clickHandler(){
        console.log('button is clicked') 
    }
return(
    <div>
        <button onClick={clickHandler}>Try Functional</button>

    </div>
)

}
export default FunctionalClick