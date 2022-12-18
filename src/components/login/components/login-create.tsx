import React from 'react'
import { ButtonPrimary, Title } from "../../../global.styles";
import { Form } from "../login.styles";
// @ts-ignore
import { Input } from "../../input.jsx";
import { UseForm } from "../../../hooks/useForm";
import { UserContext } from "../../../context/userProvider";

export const LoginCreate = () => {
  const username = UseForm('username')
  const email = UseForm('email')
  const password = UseForm('')
  
  // @ts-ignore
  const {createUser, loading} = React.useContext(UserContext)
  
  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault()
    if (username.validate() && email.validate() && password.validate())
      createUser(username.value, email.value, password.value)
    
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
        
        
        {
          loading
            ? <ButtonPrimary disabled>loading...</ButtonPrimary>
            : <ButtonPrimary>Create</ButtonPrimary>
        }
      
      
      </Form>
    
    </section>
  )
}
