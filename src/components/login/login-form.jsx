import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Input } from '../form/input'
import { Button } from '../form/button'

export const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    const url = 'https://dogsapi.origamid.dev/json/jwt-auth/v1/token'
    event.preventDefault()
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    }).then(response => {
      console.log(response)
      return response.json
    }).then(json => console.log(json))
  }

  return (
    <section className={'container'}>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input
          label={'User'}
          type={'text'}
          name={'username'}
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />

        <Input
          label={'Password'}
          type={'password'}
          name={'password'}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <Button>Send</Button>

      </form>
      <Link to={'/login/create'}>Sign In</Link>
    </section>
  )
}