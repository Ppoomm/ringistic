import { useState, createContext } from "react";

export const AuthContext = createContext({
  isAuth: false,
  userInfo: {},
  login: () => {},
  logout: () => {},
  setUserInfo: (data) => {},
});
const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const loginHandler = () => {
    setIsAuth(true);
  };
  const logoutHandler = () => {
    setIsAuth(false);
    setUserInfo({});
    localStorage.clear();
  };
  const setUserInfoHandler = (user) => {
    setUserInfo(user);
  };
  return (
    <AuthContext.Provider
      value={{
        isAuth,
        userInfo,
        login: loginHandler,
        logout: logoutHandler,
        setUserInfo: setUserInfoHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;