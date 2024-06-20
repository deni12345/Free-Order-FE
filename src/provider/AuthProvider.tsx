import axios from "axios";
import {
  Children,
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type AuthContextType = {
  token: string | null;
  setNewToken: (newToken: string) => void;
};

type AuthProviderProp = {
  children: ReactNode;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

const AuthProvider = ({ children }: AuthProviderProp) => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const setNewToken = (newToken: string) => {
    setToken(newToken);
  };

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      localStorage.setItem("token", token);
    } else {
      delete axios.defaults.headers.common["Authorization"];
      localStorage.removeItem("token");
    }
  }, [token]);

  const contextValue = useMemo<AuthContextType>(
    () => ({
      token,
      setNewToken,
    }),
    [token]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
