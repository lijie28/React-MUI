
import './App.css';
import * as React from 'react';
import { Homepage } from './js/Homepage';
import { BrowserRouter, Routes, Route } from "react-router-dom";


const data = {};

function App() {
  (() => {
    data.session_id = generateUID();
  })()

  return (
    <BrowserRouter>
      <Homepage data={data} />
    </BrowserRouter>
  );
}

function generateUID() {
  // I generate the UID from two parts here
  // to ensure the random number provide enough bits.
  let firstPart = (Math.random() * 46656) | 0;
  let secondPart = (Math.random() * 46656) | 0;
  firstPart = ("000" + firstPart.toString(36)).slice(-3);
  secondPart = ("000" + secondPart.toString(36)).slice(-3);
  return firstPart + secondPart;
}



export default App;
