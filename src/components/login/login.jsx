import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginForm } from './login-form'
import { LoginCreate } from './login-create'
import { LoginPasswordLost } from './login-password-lost'
import { LoginPasswordReset } from './login-password-reset'

export const Login = () => {
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