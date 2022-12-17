import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginForm } from './login-form'
import { LoginCreate } from './login-create'
import { LoginPasswordLost } from './login-password-lost'
import { LoginPasswordReset } from './login-password-reset'
import { UserContext } from '../../use-context/userProvider.jsx'
import { RouteEnum } from '../../Router-Enum'

export const Login = () => {

  const {login} = React.useContext(UserContext)

  if (login) return <Navigate to={RouteEnum.account}/>

  return (
    <section>
      <Routes>
        <Route path={'/'} element={<LoginForm/>}/>
        <Route path={'create'} element={<LoginCreate/>}/>
        <Route path={'password-lost'} element={<LoginPasswordLost/>}/>
        <Route path={'password-reset'} element={<LoginPasswordReset/>}/>
      </Routes>

    </section>
  )
}