import { createBrowserRouter, RouterProvider, Outlet, Navigate } from "react-router-dom";
import RightBar from "./components/rightBar/RightBar";
import LeftBar from "./components/LeftBar/LeftBar";
import Navbar from "./components/navbar/Navbar";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";

const AppLayout = () => (
  <div>
    <Navbar />
    <div style={{ display: "flex" }}>
      <LeftBar />
      <div style={{ flex: 6 }}>
        <Outlet />
      </div>
      <RightBar />
    </div>
  </div>
);

const ProtectedRoute = ({ children }: { children: JSX.Element })  => {
  const isLoggedIn = true;

  if (!isLoggedIn) {
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
