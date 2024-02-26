import React from 'react';
import './App.css';
import Greeting from './components/Greeting/Greeting';
import Welcome from "./components/Welcome/Welcome";

function App() {
  return (
    <div className="App">
     <Greeting name="Alok" age={28} />
     <Welcome name="Ankit" age={32} />
    </div>
  );
}

export default App;
