import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginForm } from './components/login-form'
import { LoginCreate } from './components/login-create'
import { LoginPasswordLost } from './components/login-password-lost'
import { LoginPasswordReset } from './components/login-password-reset'
import { UserContext } from '../../context/userProvider'
import { RouteEnum } from '../../Router-Enum'
import { Container } from '../../global.styles'
import { FormsLogin } from './login.styles'

export const Login = () => {

  const {login} = React.useContext(UserContext)

  if (login) return <Navigate to={RouteEnum.account}/>

  return (
    <Container>
      <FormsLogin>
        <Routes>
          <Route path={'/'} element={<LoginForm/>}/>
          <Route path={'create'} element={<LoginCreate/>}/>
          <Route path={'password-lost'} element={<LoginPasswordLost/>}/>
          <Route path={'password-reset'} element={<LoginPasswordReset/>}/>
        </Routes>
      </FormsLogin>
    </Container>
  )
}
