import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Button, Typography} from "@mui/material";
import reportWebVitals from './reportWebVitals';
import {TypeSpecimen} from "@mui/icons-material";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Typography className="text-3xl font-bold underline">
            Hello world!
        </Typography>
    </React.StrictMode>
);

reportWebVitals();
