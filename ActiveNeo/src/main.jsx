import { StrictMode } from "react";
import App from "./App.jsx";
import "./index.css";
import { createRoot } from "react-dom/client";
import "./index.css";
import Dashboard from "./components/Dashboard.jsx";
import CaptureImage from "./components/tracker/ImageCapture.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <App /> */}
    {/* <CaptureImage /> */}
  </StrictMode>
);
