import React from 'react'
// @ts-ignore
import { Input } from '../../../components/form/input'
import { UseForm } from '../../../hooks/useForm'
import { UserContext } from '../../../context/userProvider'
import { ButtonPrimary, ErrorMessage, Title } from '../../../global.styles'
import { CreateButton, ForgotPassword, SignUp } from '../login.styles'
import { RouteEnum } from "../../../@enum/Router-Enum";
import { Form } from "../../../components/form/form.styles";

export const LoginForm = () => {
  
  const username = UseForm('')
  const password = UseForm('')
  // @ts-ignore
  const {userLogin, loading, error} = React.useContext(UserContext)
  
  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault()
    
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value)
    }
  }
  
  return (
    <section className={'animeLeft'}>
      <Title className={'title'}>Login</Title>
      <Form action="" onSubmit={handleSubmit}>
        <Input
          label={'Email'}
          type={'text'}
          name={'username'}
          {...username}
        />
        
        <Input
          label={'Password'}
          type={'password'}
          name={'password'}
          {...password}
        />
        <ForgotPassword to={RouteEnum.forgotPassword}> Forgot password?</ForgotPassword>
        <div>
          
          {
            loading
              ? <ButtonPrimary disabled>loading...</ButtonPrimary>
              : <ButtonPrimary>Sign in</ButtonPrimary>
          }
        </div>
        
        {error && <ErrorMessage>{error}</ErrorMessage>}
      
      </Form>
      
      <SignUp>
        <p>New to Dogs? </p>
        <CreateButton to={RouteEnum.accountCreate}>Create an account</CreateButton>
      </SignUp>
    
    
    </section>
  )
}
