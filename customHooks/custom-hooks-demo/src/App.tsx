import React, { useState } from 'react';
import './App.css';
import useFullName from './useFullName';
import useLocalStorage from './useLocalStorage';

function App() {
  const [firstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [fullName, setFullName] = useFullName(firstName, LastName);
  const [storageValue, setStorageValue] = useLocalStorage("name" ,firstName + " " + LastName);

  const updateFirstName = (event: any) => {
    setFirstName(event.target.value);
    setFullName(event.target.value + " " + LastName);
    setStorageValue(event.target.value + " " + LastName);
  }

  const updateLastName = (event: any) => {
    setLastName(event.target.value);
    setFullName(firstName + " " + event.target.value);
    setStorageValue(firstName + " " + event.target.value);
  }
  return (
    <div className="App">
      <div>
       <p> FirstName: <input type='text' 
        onChange={(event) => updateFirstName(event) } /></p>
        <p>LastName: <input type="text" 
        onChange={(event) => updateLastName(event) }/></p>
        FullName: <label>{firstName} {LastName}</label>
        <p>
          using useFullName custom hook
        </p>
        <p>Full Name: <label>{fullName}</label></p>
        <p>
          using useLocalStorage custom hook
        </p>
        <p>Full Name: <label>{storageValue}</label></p>
      </div>
    </div>
  );
}

export default App;
