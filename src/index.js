import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import 'jquery/dist/jquery';
import VantaNet from "vanta/src/vanta.net";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

VantaNet({
    el: "body",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0xdc7f00,
    backgroundColor: 0x0
});
