import {
  Navigate,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import { MainLayout } from "../view/main/MainLayout";
import { SignIn } from "../view/authen/SignIn";
import { SignUp } from "../view/authen/SignUp";
import { DashBoard } from "../view/main/inner/DashBoard";
import { TableView } from "../view/main/inner/TableView";
import { lazy } from "react";

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
