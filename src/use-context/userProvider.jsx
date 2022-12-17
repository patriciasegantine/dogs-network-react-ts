import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from '../api'
import { RouteEnum } from '../Router-Enum'

export const UserContext = React.createContext()

export const UserProvider = ({children}) => {

  const [data, setData] = useState(null)
  const [login, setLogin] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const navigate = useNavigate()

  const getUser = async (token) => {
    const {url, options} = USER_GET(token)
    const userResponse = await fetch(url, options)
    const json = await userResponse.json()
    setData(json)
    setLogin(true)
    console.log(json)
  }

  const userLogin = async (username, password) => {
    try {
      setError(null)
      setLoading(true)
      const {url, options} = TOKEN_POST({
        username,
        password
      })
      const tokenResponse = await fetch(url, options)

      if (!tokenResponse.ok) throw new Error('Error: Invalid email or password')
      const {token} = await tokenResponse.json()
      window.localStorage.setItem('token', token)
      await getUser(token)
      navigate('/account')
    } catch (error) {
      setError(error.message)
      setLogin(false)
    } finally {
      setLoading(false)
    }

  }

  const userLogout = useCallback(async () => {
    setData(null)
    setError(null)
    setLoading(false)
    setLogin(false)
    window.localStorage.removeItem('token')
    navigate(RouteEnum.login)
  }, [navigate])

  useEffect(() => {
    const autoLogin = async () => {
      const token = window.localStorage.getItem('token')
      if (token) {
        try {
          setError(null)
          setLoading(true)
          const {url, options} = TOKEN_VALIDATE_POST(token)
          const tokenResponse = await fetch(url, options)

          if (!tokenResponse.ok) throw new Error('Invalid Token')

          await getUser(token)

        } catch (error) {
          await userLogout()
        } finally {
          setLoading(false)
        }
      }
    }

    autoLogin().then(r => console.log(r))

  }, [userLogout])

  return (
    <UserContext.Provider value={{userLogin, userLogout, data, login, loading, error}}>
      {children}
    </UserContext.Provider>
  )
}