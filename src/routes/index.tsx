import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";
import { ProtectedRoute } from "./ProtectedRoute";
import { Home } from "../view/Home";
import { Login } from "../view/Login";

const Routes = () => {
  const routesForAuthenOnly = [
    {
      path: "/",
      element: <ProtectedRoute />,
      children: [
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/",
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

  const router = createBrowserRouter([
    ...routesForAuthenOnly,
    ...routesForNonAuthenOnly,
  ]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default Routes;
