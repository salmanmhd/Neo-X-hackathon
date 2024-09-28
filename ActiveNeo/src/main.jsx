import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import App from './App.jsx';
import './index.css';
import Dashboard from './components/Dashboard.jsx';
import Tracker from './components/Tracker.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Tracker />
    <Dashboard />
  </StrictMode>
);
