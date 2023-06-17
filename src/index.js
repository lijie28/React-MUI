import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <>
    <App />
  </>
  // </React.StrictMode>
  // https://stackoverflow.com/questions/49206509/child-component-constructor-called-multiple-times/61443443#61443443
);

window.onbeforeunload = function (event) {
  console.log('reloading...')
  // post(data, false).then(res => { }).catch(err => {
  //   console.log('failed to save the data')
  // });
  event.preventDefault();
  return true;
}
reportWebVitals();
