import React from 'react'
import { ButtonPrimary, ErrorMessage, Title } from "../../../global.styles";
import { Input } from "../../../components/form/input";
import { UseForm } from "../../../hooks/useForm";
import { UseFetch } from "../../../hooks/useFetch";
import { PASSWORD_LOST_POST } from "../../../@api/api";
import { Head } from "../../../components/helper/head";
import { SectionLogin } from "../login.styles";

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
    <SectionLogin className={'animeLeft'}>
      <Head title={'Forgot Password'}/>
      
      <Title> Forgot password</Title>
      
      <form onSubmit={handleSubmit}>
        <Input type={'text'} name={'email'} label={'Email'} {...login}/>
        {loading
          ? <ButtonPrimary disabled> sending... </ButtonPrimary>
          : <ButtonPrimary> Send email</ButtonPrimary>
        }
        
        {data && <p>{data}</p>}
        
        {error && <ErrorMessage>{error}</ErrorMessage>}
      
      
      </form>
    </SectionLogin>
  )
}
