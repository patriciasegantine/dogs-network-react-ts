import React, { useContext, useState } from 'react';
import { NavLink } from "react-router-dom";
import { RouteEnum } from "../../../constants/Router-Enum";
import { ButtonSignOut, NavBar } from "../user.styles";
import { UserContext } from "../../../context/userProvider";
import { ChartLineUp, CirclesFour, Plus, SignOut } from "phosphor-react";

export const UserHeaderNav = ({}) => {
  const [mobile, setMobile] = useState(null)
  
  const {userLogout}: any = useContext(UserContext)
  
  return (
    <NavBar>
      <NavLink
        to={RouteEnum.userAccount} end
      >
        <CirclesFour size={20}/>
        {mobile && 'Feed'}
      </NavLink>
      
      <NavLink to={RouteEnum.metrics}>
        <ChartLineUp size={20}/>
        {mobile && 'Metrics'}
      </NavLink>
      
      <NavLink to={RouteEnum.postPhoto}>
        <Plus size={20}/>
        {mobile && 'Add Photo'}
      </NavLink>
      
      <ButtonSignOut onClick={() => userLogout()}>
        <SignOut size={20}/>
        {mobile && ' Leave'}
      </ButtonSignOut>
    </NavBar>
  );
};
