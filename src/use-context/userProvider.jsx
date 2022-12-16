import React, { useState } from 'react'
import { TOKEN_POST, USER_GET } from '../api.js'

export const UserContext = React.createContext()

export const UserProvider = ({children}) => {

  const [data, setData] = useState(null)
  const [login, setLogin] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const getUser = async (token) => {
    const {url, options} = USER_GET(token)
    const userResponse = await fetch(url, options)
    const json = await userResponse.json()
    setData(json)
    setLogin(true)
    console.log(json)
  }


  const userLogin = async (username, password) => {
    const {url, options} = TOKEN_POST({
      username,
      password
    })
    const tokenResponse = await fetch(url, options)
    const { token } = await tokenResponse.json()

    window.localStorage.setItem('token', token)

    await getUser(token)
  }

  return (
    <UserContext.Provider value={{userLogin, data}}>
      {children}
    </UserContext.Provider>
  )
}