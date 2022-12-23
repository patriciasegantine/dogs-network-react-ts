import React, { useContext, useEffect, useState } from 'react';
import { RouteEnum } from "../../../@enum/Router-Enum";
import { Links, MobileButton, NavBar, SignOutLink } from "../user.styles";
import { UserContext } from "../../../context/userProvider";
import { Camera, ChartLineUp, CirclesFour, DotsThreeOutlineVertical, List, SignOut } from "phosphor-react";
import { UseMedia } from "../../../hooks/useMedia";
import { useLocation } from "react-router-dom";

export const UserHeaderNav = ({}) => {
  const [isMobileActive, setIsMobileActive] = useState<boolean>(false)
  
  const {userLogout}: any = useContext(UserContext)
  const mobile = UseMedia('(max-width: 40rem)')
  const {pathname} = useLocation()
  
  useEffect(() => {
    setIsMobileActive(false)
  }, [pathname])
  
  return (
    <>
      {
        mobile &&
        <MobileButton
          isMobile={isMobileActive}
          aria-label={'menu'}
          onClick={() => setIsMobileActive(!isMobileActive)}>
          {
            !isMobileActive
              ? <List size={20}/>
              : <DotsThreeOutlineVertical size={20}/>
          }
        </MobileButton>
      }
      
      <NavBar isMobile={isMobileActive}>
        <Links
          to={RouteEnum.userAccount} end
        >
          <CirclesFour size={20}/>
          {mobile && 'Feed'}
        </Links>
        
        <Links to={RouteEnum.metrics}>
          <ChartLineUp size={20}/>
          {mobile && 'Metrics'}
        </Links>
        
        <Links to={RouteEnum.postPhoto}>
          <Camera size={20}/>
          {mobile && 'Add Photo'}
        </Links>
        
        <SignOutLink onClick={() => userLogout()}>
          <SignOut size={20}/>
          {mobile && ' Leave'}
        </SignOutLink>
      </NavBar>
    
    </>
  );
};
