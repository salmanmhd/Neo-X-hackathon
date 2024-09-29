
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Dashboard from './components/Dashboard.jsx';
import Tracker from './components/tracker/Tracker.jsx';
import CaptureImage from './components/tracker/ImageCapture.jsx';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <App /> */}
    <Tracker />
    {/* <CaptureImage /> */}
    <Dashboard />
  </StrictMode>
);
