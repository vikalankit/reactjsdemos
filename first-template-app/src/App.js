import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer'

function App() {
  return (
    <div >
      <Welcome name="Ankit Tech Classes">
        </Welcome>  
      <Welcome/>   
      <Header name ="In Header">
       <Welcome name="Ravi"></Welcome>
     </Header>
     <Body name="In Body">
       <Welcome name="Alok"></Welcome>
     </Body>
     <Footer name="In Footer">
       <Welcome name="Kishan"></Welcome>
     </Footer>
    </div>
  );
}

export default App;
