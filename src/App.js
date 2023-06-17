import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import Button from '@mui/material/Button';
import { Homepage } from './js/Homepage';
import { Admin } from './js/Admin';
import { BrowserRouter, Routes, Route } from "react-router-dom";


const data = {};

function App() {
  (() => {
    data.session_id = generateUID();
  })()

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage data={data} />}>
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
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
