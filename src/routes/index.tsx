import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";
import { ProtectedRoute } from "./ProtectedRoute";
import { Home } from "../view/Home";
import { Login } from "../view/Login";

const Routes = () => {
  const { token } = useAuth();

  const routesForPublic = [
    {
      path: "/about-us",
      element: <div>About Us</div>,
    },
  ];

  const routesForAuthenOnly = [
    {
      path: "/",
      element: <ProtectedRoute />,
      children: [
        {
          path: "/home",
          element: <Home />,
        },
      ],
    },
  ];

  const routesForNonAuthenOnly = [
    {
      path: "/login",
      element: <Login />,
    },
  ];
};
