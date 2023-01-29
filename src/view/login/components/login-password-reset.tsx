import React, { useEffect, useState } from 'react'
import { Input } from "../../../components/form/input";
import { ButtonPrimary, ErrorMessage, Title } from "../../../global.styles";
import { RouteEnum } from "../../../@enum/Router-Enum";
import { UseFetch } from "../../../hooks/useFetch";
import { UseForm } from "../../../hooks/useForm";
import { PASSWORD_RESET_POST } from "../../../@api/api";
import { useNavigate } from "react-router-dom";
import { Head } from "../../../components/helper/head";

export const LoginPasswordReset: React.FC<any> = () => {
  
  const [key, setKey] = useState('')
  const [login, setLogin] = useState('')
  
  const {loading, error, request} = UseFetch()
  const newPassword = UseForm('')
  const navigate = useNavigate()
  
  async function handleSubmit(event: { preventDefault: () => void; }) {
    event.preventDefault()
    
    if (newPassword.validate()) {
      
      const {url, options} = PASSWORD_RESET_POST({
        login: login,
        key: key,
        newPassword: newPassword.value
      })
      
      const {response} = await request(url, options)
      
      if (response.ok) navigate(RouteEnum.login)
    }
    
  }
  
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const key = params.get('key')
    const login = params.get('login')
    
    if (key) setKey(key)
    if (login) setLogin(login)
    
    console.log(key)
  }, [])
  
  return (
    <div>
      <Head title={'Reset Password'}/>
      
      <Title> Reset Password</Title>
      
      <form onSubmit={handleSubmit}>
        
        <Input type={'text'} name={'newPassword'} label={'New password'} {...newPassword}/>
        
        {loading
          ? <ButtonPrimary disabled> sending... </ButtonPrimary>
          : <ButtonPrimary> Reset</ButtonPrimary>
        }
        
        {error && <ErrorMessage>{error}</ErrorMessage>}
      
      </form>
    </div>
  )
}
