import React from 'react'
import { ButtonPrimary, ErrorMessage, Title } from "../../../global.styles";
import { CreateButton, SectionLogin, SignUp } from "../login.styles";
// @ts-ignore
import { Input } from "../../../components/form/input";
import { UseForm } from "../../../hooks/useForm";
import { UseFetch } from "../../../hooks/useFetch";
import { USER_POST } from "../../../@api/api";
import { UserContext } from "../../../context/userProvider";
import { RouteEnum } from "../../../@enum/Router-Enum";
import { Form } from "../../../components/form/form.styles";
import { Head } from "../../../components/helper/head";

export const LoginCreate = () => {
  const username = UseForm('username')
  const email = UseForm('email')
  const password = UseForm('')
  
  // @ts-ignore
  const {userLogin} = React.useContext(UserContext)
  const {loading, error, request} = UseFetch()
  
  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault()
    
    const {url, options} = USER_POST({
      username: username.value,
      email: email.value,
      password: username.value
    })
    
    const {response} = await request(url, options)
    
    // @ts-ignore
    if (response.ok) userLogin(username.value, username.value)
    
  };
  
  return (
    <SectionLogin className={'animeLeft'}>
      <Head title={'Create account'}/>
      
      <Title className={'title'}>Create Account</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          label={'Username'}
          type={'text'}
          name={'username'}
          {...username}
        />
        <Input
          label={'Email'}
          type={'email'}
          name={'email'}
          {...email}
        />
        <Input
          label={'Password'}
          type={'password'}
          name={'password'}
          {...password}
        />
        
        <div>
          {
            loading
              ? <ButtonPrimary disabled>loading...</ButtonPrimary>
              : <ButtonPrimary>Create account</ButtonPrimary>
          }
        </div>
        
        {error && <ErrorMessage>{error}</ErrorMessage>}
        
        <SignUp>
          <p>Already have an account? </p>
          <CreateButton to={RouteEnum.login}>Sing in</CreateButton>
        </SignUp>
      
      </Form>
    
    </SectionLogin>
  )
}
