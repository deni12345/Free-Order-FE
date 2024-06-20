import {
  RouterProvider,
  createBrowserRouter,
  RouteObject,
} from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";
import { ProtectedRoute } from "./ProtectedRoute";
import { Home } from "../view/Home";
import { Login } from "../view/Login";

const Routes = () => {
  const { token } = useAuth();

  const routesForPublic: RouteObject[] = [
    {
      path: "/",
      element: <div>Public</div>,
    },
    {
      path: "/about-us",
      element: <div>About Us</div>,
    },
  ];

  const routesForAuthenOnly: RouteObject[] = [
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

  const routesForNotAuthenOnly: RouteObject[] = [
    {
      path: "/login",
      element: <Login />,
    },
  ];

  const router = createBrowserRouter([
    ...routesForPublic,
    ...(token ? routesForAuthenOnly : []),
    ...routesForNotAuthenOnly,
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
