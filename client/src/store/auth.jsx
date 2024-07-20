//@ts-nocheck
import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token,setToken]=useState(localStorage.getItem("token"));
  const storetokenInLS = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };

  let isLoggedin=!!token


  const LogoutUser = () => {
    setToken("")
   return localStorage.removeItem("token")
  };
  return (
    <>
      <AuthContext.Provider value={{isLoggedin, storetokenInLS,LogoutUser }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};
export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth must be used within a AuthProvider");
  }

  return authContextValue;
};
