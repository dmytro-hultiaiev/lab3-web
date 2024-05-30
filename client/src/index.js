import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

const addGoogleFont = (fontName) => {
  const link = document.createElement("link");
  link.href = `https://fonts.googleapis.com/css2?family=${fontName}:wght@600;800&display=swap`;
  link.rel = "stylesheet";
  document.head.appendChild(link);
};

addGoogleFont("Nunito");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
