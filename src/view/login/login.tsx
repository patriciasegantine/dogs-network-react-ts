import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginForm } from './components/login-form'
import { LoginCreate } from './components/login-create'
import { LoginPasswordLost } from './components/login-password-lost'
import { LoginPasswordReset } from './components/login-password-reset'
import { UserContext } from '../../context/userProvider'
import { RouteEnum } from '../../@enum/Router-Enum'
import { Container } from '../../global.styles'
import { FormsLogin } from './login.styles'
import { NotFound } from "../../components/not-found/not-found";

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
            path={'/create'}
            element={<LoginCreate/>}
          />
          
          <Route
            path={'/forgot'}
            element={<LoginPasswordLost/>}
          />
          
          <Route
            path={'/reset'}
            element={<LoginPasswordReset/>}
          />
          
          <Route
            path={'*'}
            element={<NotFound/>}
          />
        </Routes>
      </FormsLogin>
    </Container>
  )
}
