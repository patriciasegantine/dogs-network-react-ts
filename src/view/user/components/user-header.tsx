import React, { useEffect, useState } from 'react';
import { Title } from "../../../global.styles";
import { UserHeaderNav } from "./user-header-nav";
import { HeaderNavBar } from "../user.styles";
import { useLocation } from "react-router-dom";
import { RouteEnum } from "../../../@enum/Router-Enum";

export const UserHeader = () => {
  const [title, setTitle] = useState('')
  const location = useLocation()
  
  useEffect(() => {
    const {pathname} = location
    
    switch (pathname) {
      
      case RouteEnum.metrics:
        setTitle('Metrics')
        break;
      case RouteEnum.postPhoto:
        setTitle('Add photo')
        break;
      default:
        setTitle('My Account')
      
    }
    
  }, [location])
  return (
    <HeaderNavBar>
      <Title>{title}</Title>
      <UserHeaderNav/>
    
    </HeaderNavBar>
  );
};
