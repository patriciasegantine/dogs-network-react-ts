import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
// @ts-ignore
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET, USER_POST } from '../@api/api'
import { RouteEnum } from '../@enum/Router-Enum'

export interface ContextType {
  userLogin: () => void,
  userLogout: () => void,
  data: any
  login: any
  loading: boolean
  error: boolean
}

// @ts-ignore
export const UserContext = React.createContext()

export const UserProvider = ({children}: any) => {
  
  const [data, setData] = useState(null)
  const [login, setLogin] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<any>(false)
  
  const navigate = useNavigate()
  
  const getUser = async (token: string) => {
    const {url, options} = USER_GET(token)
    const response = await fetch(url, options)
    const json = await response.json()
    setData(json)
    setLogin(true)
  }
  
  const userLogin = async (username: string, password: string) => {
    const checkResponse = (response: any) => {
      if (!response.ok) throw Error('Invalid email or password')
    }
    
    try {
      setError(false)
      setLoading(true)
      const {url, options} = TOKEN_POST({
        username,
        password
      })
      const response = await fetch(url, options)
      checkResponse(response)
      const {token} = await response.json()
      window.localStorage.setItem('token', token)
      await getUser(token)
      navigate(RouteEnum.userAccount)
    } catch (error) {
      // @ts-ignore
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
      
      const checkResponse = (response: any) => {
        if (!response.ok) throw Error('Invalid Token')
      }
      
      if (token) {
        try {
          setError(null)
          setLoading(true)
          const {url, options} = TOKEN_VALIDATE_POST(token)
          const response = await fetch(url, options)
          checkResponse(response)
          await getUser(token)
        } catch (error) {
          await userLogout()
        } finally {
          setLoading(false)
        }
      } else {
        setLogin(false)
      }
    }
    
    autoLogin()
    
  }, [userLogout])
  
  return (
    <UserContext.Provider value={{userLogin, userLogout, data, login, loading, error}}>
      {children}
    </UserContext.Provider>
  )
}
