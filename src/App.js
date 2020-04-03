/*import React, { useState } from 'react'; 

import Header from './Header';

function App() {
  const [counter, setCounter ] = useState(0);

  function increment() {
    setCounter(counter + 1);

  }
  
  return (
    <div> 
      <Header>Contador: {counter}</Header>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
}
//<Header title= "Semana Omnistack"/>
//<headers> Semana Omnistack </headers> (vai usar a propriedade "children no Header")

export default App; */

import React from 'react';

import './global.css';

//import Logon from './pages/logon';
import Routes from './routes';

function App() {
  return (
    //<Logon />
    <Routes />
  );
}

export default App;
