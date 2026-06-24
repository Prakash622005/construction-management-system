import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css"; // Boots your custom CSS token values and Tailwind core utility layers

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);