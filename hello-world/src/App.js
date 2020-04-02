import React from 'react';

import './App.css';
import Welcome from './components/functional';
import Greet from './components/classcomp';
import HelloJSX from './components/hello';
import Message from './components/Message';
import Counter from './components/Counter';
function App() {
  return (
    <div className="App">
{/* ------------------   Component Types   ----------------------- */}
      <h1>Types of Components</h1>
    <Welcome />
    <Greet />
    <HelloJSX /> 

{/* ------------------    use of Props in functional components   ----------------------- */}
       <Welcome name = "Brabus"  petname ="baruu">
          <p>Our first pet.</p> 
      </Welcome>
      <Welcome name = "Rickson" petname ="ricks">
        <button>Read more</button> 
      </Welcome>
      <Welcome name = "Scooby" petname = "sukku"/>
      


     {/* ------------------    use of Props in class components   ----------------------- */}
     <Greet name = "Scooby" petname = "sukku" >
       <p>Children property of class component</p>
     </Greet>  

     <Message /> 
     <Counter /> 

    </div>
  );
}

export default App;
