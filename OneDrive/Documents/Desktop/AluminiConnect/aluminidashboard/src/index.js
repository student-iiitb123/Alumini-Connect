import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // 💥 import this
import './index.css';

import Dashboard from './components/DashBoard/Dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Dashboard />
  </BrowserRouter>
);


