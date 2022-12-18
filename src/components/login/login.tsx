import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginForm } from './components/login-form'
import { LoginCreate } from './components/login-create'
import { LoginPasswordLost } from './components/login-password-lost'
import { LoginPasswordReset } from './components/login-password-reset'
import { UserContext } from '../../context/userProvider'
import { RouteEnum } from '../../constants/Router-Enum'
import { Container } from '../../global.styles'
import { FormsLogin } from './login.styles'

export const Login = () => {
  
  // @ts-ignore
  const {login} = React.useContext(UserContext)
  
  if (login) return <Navigate to={RouteEnum.userAccount}/>
  
  return (
    <Container>
      <FormsLogin>
        <Routes>
          <Route
            path={'/'}
            element={<LoginForm/>}
          />
          
          <Route
            path={RouteEnum.accountCreate}
            element={<LoginCreate/>}
          />
          
          <Route
            path={RouteEnum.forgotPassword}
            element={<LoginPasswordLost/>}
          />
          
          <Route
            path={RouteEnum.resetPassword}
            element={<LoginPasswordReset/>}
          />
        </Routes>
      </FormsLogin>
    </Container>
  )
}
