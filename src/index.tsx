import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { DarkModeContextProvider } from "./context/themeContext";
import { AuthContextProvider } from "./context/authContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <DarkModeContextProvider>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </DarkModeContextProvider>
);
