import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./styles/global.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* Add the basename to handle deployment in a subdirectory */}
    <BrowserRouter basename="/iSchool_Web">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Log performance metrics
reportWebVitals();
