import axios from "axios";
import {
  Children,
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react"

const AuthContext = createContext("");

type AuthProviderProp = {
  Children: ReactNode
}

const AuthProvider = ({ Children }: AuthProviderProp) => {
  const [token, setToken] = useState(localStorage.getItem("token"))

  const setNewToken
    = (newToken: string) => {
      setToken(newToken)
    }

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
      localStorage.setItem("token", token)
    } else {
      delete axios.defaults.headers.common["Authorization"]
      localStorage.removeItem("token")
    }
  }, [token])


}