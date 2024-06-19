import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";

export const ProtectedRoute = () => {
  const { token } = useAuth();

  if (!token) {
    //if token not existed then return to login page
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};
