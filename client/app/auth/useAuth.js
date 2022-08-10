import { useContext } from "react";
import AuthContext from "./context";
import authStorage from "./storage";
import jwtDecode from "jwt-decode";

const useAuth = (props) => {
  const { user, setUser } = useContext(AuthContext);

  const logout = () => {
    authStorage.removeToken();
    setUser(null);
  };

  const login = (token) => {
    authStorage.storeToken(token);
    const user = jwtDecode(token);
    setUser(user);
  };

  return { user, login, logout };
};

export default useAuth;
