import { useNavigate } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";

export const Login = () => {
  const { setNewToken } = useAuth();
  const navigate = useNavigate();

  return <div></div>;
};
