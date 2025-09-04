import React from 'react';
import ReactDOM from 'react-dom/client';
// src/index.js or src/main.jsx
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App'; // Make sure App.js exists in the same folder

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
