import React from 'react';
import { ReactDOM } from 'react';
import Headers from './components/header';
import Mount from "./components/mount";
import Syd from "./components/sydney";
import Gei from './components/Geiranger';
import "./components/style.css";

function App() {
  return (
    <>
      <Headers />
      <Mount />
      <div className='line'></div>
      <Syd />
      <div className='line'></div>
      <Gei />
    </>
  );
}

export default App;
