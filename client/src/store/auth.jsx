//@ts-nocheck
import { createContext } from "react";

export const AuthContext=createContext();
export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = React.useState(null);














