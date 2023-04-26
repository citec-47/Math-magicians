/* eslint-disable linebreak-style */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './ReactApp';

const first = ReactDOM.createRoot(document.getElementById('first'));
first.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
