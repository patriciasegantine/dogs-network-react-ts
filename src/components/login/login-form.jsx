import React from 'react'
import { Link } from 'react-router-dom'
import { Input } from '../form/input'
import { Button } from '../form/button'
import { UseForm } from '../../hooks/useForm.js'



export const LoginForm = () => {

  const username = UseForm('email')
  const password = UseForm('password')

  console.log('username', username.validate)
  console.log('password', password.validate)

  const handleSubmit = (event) => {
    event.preventDefault()

    if(username.validate() && password.validate()) {

      const url = 'https://dogsapi.origamid.dev/json/jwt-auth/v1/token'
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify()
      }).then(response => {
        console.log(response)
        return response.json
      }).then(json => console.log(json))
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
          // value={username}
          // onChange={(event) => setUsername(event.target.value)}
        />

        <Input
          label={'Password'}
          type={'password'}
          name={'password'}
          {...password}
          // value={password}
          // onChange={(event) => setPassword(event.target.value)}
        />

        <Button>Send</Button>

      </form>
      <Link to={'/login/create'}>Sign In</Link>
    </section>
  )
}