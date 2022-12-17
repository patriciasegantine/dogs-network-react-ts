import React from 'react'
import { Link } from 'react-router-dom'
import { Input } from '../form/input'
import { Button } from '../form/button'
import { UseForm } from '../../hooks/useForm.js'
import { UserContext } from '../../use-context/userProvider.jsx'

export const LoginForm = () => {

  const username = UseForm()
  const password = UseForm()
  const {userLogin, loading, error} = React.useContext(UserContext)

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value)
    }
  }

  return (
    <section className={'container'}>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input
          label={'Email'}
          type={'text'}
          name={'username'}
          {...username}
        />

        <Input
          label={'Password'}
          type={'password'}
          name={'password'}
          {...password}
        />

        {
          loading
            ? <Button disabled>loading...</Button>
            : <Button>Send</Button>
        }

        {error && <p>{error}</p>}

      </form>
      <Link to={'/login/create'}>Sign In</Link>
    </section>
  )
}