import React from 'react'
import { PawPrint, User } from 'phosphor-react'
import { UserContext } from '../../context/userProvider'
import { RouteEnum } from '../../constants/Router-Enum'
import { Container } from '../../global.styles'
import { HeaderContainer, Login, Logo, Nav } from './header.styles.js'

export const Header = () => {
  // @ts-ignore
  const {data} = React.useContext(UserContext)
  
  return (
    <HeaderContainer>
      <Container>
        <Nav>
          <Logo to={'/'} aria-label={'Dogs - Home'}>
            <PawPrint size={35}/>
          </Logo>
          
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
