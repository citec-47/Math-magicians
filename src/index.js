/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable react/jsx-indent */
/* eslint-disable linebreak-style */
/* eslint-disable import/order */
/* eslint-disable linebreak-style */
import React from 'react';
import App from './ReactApp';
import reportWebVitals from './report';
import './index.css';
import ReactDOM from 'react-dom/client';

const myFirstReact = ReactDOM.createRoot(document.getElementById('first'));
myFirstReact.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);

reportWebVitals();