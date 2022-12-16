import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Input } from '../form/input'
import { Button } from '../form/button'
import { UseForm } from '../../hooks/useForm.js'
import { TOKEN_POST, USER_GET } from '../../api.js'

export const LoginForm = () => {

  const username = UseForm()
  const password = UseForm()

  const getUser = async (token) => {
    const {url, options} = USER_GET(token)

    const response = await fetch(url, options)
    const json = await response.json()

    console.log(json)
  }


  const handleSubmit = async (event) => {
    event.preventDefault()

    if(username.validate() && password.validate()) {

    const {url, options } = TOKEN_POST({
      username: username.value,
      password: password.value
    })

      const response = await  fetch(url, options)
      const json  = await response.json()

      window.localStorage.setItem('token', json.token )
      await getUser(json.token)
    }
  }

  useEffect(() => {
    const token = window.localStorage.getItem('token')

    console.log('token Effect', token)

    if(token) {
      getUser(token)
    }
  }, [])

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

        <Button>Send</Button>

      </form>
      <Link to={'/login/create'}>Sign In</Link>
    </section>
  )
}