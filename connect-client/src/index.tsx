import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { DarkModeContextProvider } from "./context/themeContext";
import { AuthContextProvider } from "./context/authContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
