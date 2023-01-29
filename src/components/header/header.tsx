import React from 'react'
import { User } from 'phosphor-react'
import { UserContext } from '../../context/userProvider'
import { RouteEnum } from '../../@enum/Router-Enum'
import { Container } from '../../global.styles'
import { HeaderContainer, IconLogo, Login, Logo, LogoTitle, Nav } from './header.styles.js'
import { NavLink } from "react-router-dom";

export const Header = () => {
  // @ts-ignore
  const {data} = React.useContext(UserContext)
  
  return (
    <HeaderContainer>
      <Container>
        <Nav>
          <NavLink to={'/'} aria-label={'Dogs - Home'}>
            <Logo>
              <IconLogo/>
              <LogoTitle>Pets</LogoTitle>
            </Logo>
          </NavLink>
          
          {data ? (
            <>
              <Login to={RouteEnum.userAccount}>
                {data.email}
                <User size={16}/>
              </Login>
            </>
          ) : (
            <>
              <Login to={RouteEnum.login}>
                Sing in
                <User size={16}/>
              </Login>
            </>
          )
          }
        
        
        </Nav>
      </Container>
    
    </HeaderContainer>
  )
}
