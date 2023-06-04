import { useContext } from "react";
import "./app.scss";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import RightBar from "./components/rightBar/RightBar";
import LeftBar from "./components/LeftBar/LeftBar";
import Navbar from "./components/navbar/Navbar";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import { DarkModeContext } from "./context/themeContext";
import { AuthContext } from "./context/authContext";
import { Col, Row } from "antd";
import Profile from "./Pages/Profile/Profile";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const AppLayout = () => {
  const queryClient = new QueryClient();
  const { darkMode } = useContext(DarkModeContext);
  return (
    <QueryClientProvider client={queryClient}>
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar />
        <Row className="app">
          <Col xs={0} md={4} lg={4} className="left">
            <LeftBar />
          </Col>
          <Col xs={24} md={20} lg={15} className="center">
            <Outlet />
          </Col>
          <Col sm={0} md={0} lg={5} className="right">
            <RightBar />
          </Col>
        </Row>
      </div>
    </QueryClientProvider>
  );
};

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { currentUser } = useContext(AuthContext);
  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return children;
};

const routes = [
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profile/:id",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
];

const router = createBrowserRouter(routes);

const App = () => (
  <div>
    <RouterProvider router={router} />
  </div>
);

export default App;
