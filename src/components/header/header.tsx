import React from 'react'
import { PawPrint, User } from 'phosphor-react'
import { UserContext } from '../../context/userProvider'
import { RouteEnum } from '../../Router-Enum'
import { ButtonPrimary, Container } from '../../global.styles'
import { HeaderContainer, Login, Logo, Nav } from './header.styles.js'

export const Header = () => {
  // @ts-ignore
  const {userLogout, data} = React.useContext(UserContext)
  
  return (
    <HeaderContainer>
      <Container>
        <Nav>
          <Logo to={'/'} aria-label={'Dogs - Home'}>
            <PawPrint size={35}/>
            {/*<LogoTitle>DOG</LogoTitle>*/}
          </Logo>
          
          {data ? (
            <>
              <Login to={RouteEnum.account}>
                {data.email}
                <User size={16}/>
              </Login>
              <ButtonPrimary onClick={() => userLogout()}>Sing out</ButtonPrimary>
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
