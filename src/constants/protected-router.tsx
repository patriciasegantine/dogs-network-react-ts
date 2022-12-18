import React, { useContext } from 'react';
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/userProvider";
import { RouteEnum } from "./Router-Enum";

export const ProtectedRouter = ({children}: any) => {
  
  const {login}: any = useContext(UserContext)
  
  return login
    ? children
    : <Navigate to={RouteEnum.login}
    />
  
};
