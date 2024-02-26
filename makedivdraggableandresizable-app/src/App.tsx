import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MyModel from './myModel/myModel';
import { Button } from 'react-bootstrap';

function App() {
  const [isShow, setIsShow] = useState(false);

  const closePopup = (isClosed: boolean) => {
    setIsShow(isClosed);
  }
  return (
    <div className="App">
      <Button className="primary" onClick={() => setIsShow(true)}>Open Dialog</Button>
      <MyModel isShow={isShow} closePopup={(isClosed) => closePopup(isClosed)} />
    </div>
  );
}

export default App;
