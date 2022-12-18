import React from 'react'
import { ButtonPrimary, ErrorMessage, Title } from "../../../global.styles";
import { CreateButton, Form, SignUp } from "../login.styles";
// @ts-ignore
import { Input } from "../../input.jsx";
import { UseForm } from "../../../hooks/useForm";
import { UseFetch } from "../../../hooks/useFetch";
import { USER_POST } from "../../../api";
import { UserContext } from "../../../context/userProvider";
import { RouteEnum } from "../../../constants/Router-Enum";

export const LoginCreate = () => {
  const username = UseForm('username')
  const email = UseForm('email')
  const password = UseForm('')
  
  // @ts-ignore
  const {userLogin} = React.useContext(UserContext)
  const {loading, error, request} = UseFetch()
  
  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault()
    
    // if (username.validate() && email.validate() && password.validate()) {}
    
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
    <section>
      <Title className={'title'}>Sing in</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          label={'Username'}
          type={'text'}
          name={'username'}
          {...username}
        />
        <Input
          label={'Email'} s
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
    
    </section>
  )
}
