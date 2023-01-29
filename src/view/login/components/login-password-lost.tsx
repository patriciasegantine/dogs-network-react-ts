import React from 'react'
import { ButtonPrimary, ErrorMessage, Title } from "../../../global.styles";
import { Input } from "../../../components/form/input";
import { UseForm } from "../../../hooks/useForm";
import { UseFetch } from "../../../hooks/useFetch";
import { PASSWORD_LOST_POST } from "../../../@api/api";
import { Head } from "../../../components/helper/head";

export const LoginPasswordLost: React.FC<any> = () => {
  
  const login = UseForm('email')
  const {data, loading, error, request} = UseFetch()
  
  async function handleSubmit(event: { preventDefault: () => void; }) {
    event.preventDefault()
    
    if (login.validate()) {
      
      const {url, options} = PASSWORD_LOST_POST({
        login: login.value,
        url: window.location.href.replace('forgot', 'reset')
      })
      
      const {json} = await request(url, options)
      console.log(json)
    }
    
  }
  
  return (
    <div>
      <Head title={'Forgot Password'}/>
      
      <Title> Forgot password</Title>
      
      {data
        ?
        <div>
          <p>{data}</p>
          {/*<ButtonPrimary>Login</ButtonPrimary>*/}
        </div>
        
        : <form onSubmit={handleSubmit}>
          <Input type={'text'} name={'email'} label={'Email'} {...login}/>
          {loading
            ? <ButtonPrimary disabled> sending... </ButtonPrimary>
            : <ButtonPrimary> Send email</ButtonPrimary>
          }
          
          {error && <ErrorMessage>{error}</ErrorMessage>}
        
        </form>}
    </div>
  )
}
