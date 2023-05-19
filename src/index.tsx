import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { DarkModeContextProvider } from "./context/themeContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <App />
    </DarkModeContextProvider>
  </React.StrictMode>
);
