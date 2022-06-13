import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import * as atatus from 'atatus-spa';
import reportWebVitals from "./reportWebVitals";
atatus.config('6d38d6d1a0d24abb8ebb12b8cbfe9f6d').install();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

serviceWorkerRegistration.register();

reportWebVitals();