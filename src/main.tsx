import React from 'react'
import {createRoot} from 'react-dom/client'

import {
  BrowserRouter,
} from 'react-router-dom'

import App from './app';

const app = createRoot(document.getElementById('root')!);

app.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
