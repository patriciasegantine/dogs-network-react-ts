import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
// @ts-ignore
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET, USER_POST } from '../api'
import { RouteEnum } from '../Router-Enum'

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
  
  const createUser = async (username: string, email: string, password: string) => {
    try {
      setError(false)
      setLoading(true)
      
      const {url, options} = USER_POST({
        username,
        email,
        password
      })
      const response = await fetch(url, options)
      
      if (response.ok) await userLogin(username, password)
      if (!response.ok) throw new Error(`Error: ${response.status}
      )}`)
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false)
    }
  }
  
  const getUser = async (token: string) => {
    const {url, options} = USER_GET(token)
    const response = await fetch(url, options)
    const json = await response.json()
    setData(json)
    setLogin(true)
  }
  
  const userLogin = async (username: string, password: string) => {
    try {
      setError(false)
      setLoading(true)
      const {url, options} = TOKEN_POST({
        username,
        password
      })
      const response = await fetch(url, options)
      
      if (!response.ok) throw new Error('Error: Invalid email or password')
      const {token} = await response.json()
      window.localStorage.setItem('token', token)
      await getUser(token)
      navigate('/account')
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
      if (token) {
        try {
          setError(null)
          setLoading(true)
          const {url, options} = TOKEN_VALIDATE_POST(token)
          const response = await fetch(url, options)
          
          if (!response.ok) throw new Error('Invalid Token')
          
          await getUser(token)
          
        } catch (error) {
          await userLogout()
        } finally {
          setLoading(false)
        }
      }
    }
    
    autoLogin()
    
  }, [userLogout])
  
  return (
    <UserContext.Provider value={{createUser, userLogin, userLogout, data, login, loading, error}}>
      {children}
    </UserContext.Provider>
  )
}
