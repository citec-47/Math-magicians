import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter } from 'react-router-dom';
import App from './ReactApp';

const first = ReactDOM.createRoot(document.getElementById('first'));
first.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
