import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactGA from "react-ga4";


const TRACKING_ID = "G-3E3MNG7X0Q"; // or G-XXXX if GA4 + react-ga4
ReactGA.initialize(TRACKING_ID);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename="/portfolio">
    <App />
  </BrowserRouter>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




