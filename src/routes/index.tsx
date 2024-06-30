import {
  Navigate,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import { MainLayout } from "../view/MainLayout";
import { SignIn } from "../view/SignIn";
import { DashBoard } from "../view/inner/DashBoard";
import { TableView } from "../view/inner/TableView";
import { SignUp } from "../view/SignUp";

const Routes = () => {
  const routesForAuthenOnly: RouteObject[] = [
    {
      element: <ProtectedRoute />,
      children: [
        {
          element: <MainLayout />,
          children: [
            {
              path: "/",
              element: <Navigate to="/dashboard" />,
            },
            {
              path: "dashboard",
              element: <DashBoard />,
            },
            {
              path: "dashboard/table",
              element: <TableView />,
            },
          ],
        },
      ],
    },
  ];

  const routesForNonAuthenOnly: RouteObject[] = [
    {
      path: "signin",
      element: <SignIn />,
    },
    {
      path: "signup",
      element: <SignUp />,
    },
  ];

  const router = createBrowserRouter([
    ...routesForAuthenOnly,
    ...routesForNonAuthenOnly,
  ]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default Routes;
