import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as serviceWorkerRegistration from '.serviceWorkerRegistration';
// import reportWebVitals from './reportWebVitals';
import * as atatus from 'atatus-js';
// atatus.config('6d38d6d1a0d24abb8ebb12b8cbfe9f6d').install();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

serviceWorker.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();