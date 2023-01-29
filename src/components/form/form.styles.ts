import styled from "styled-components";

export const InputWrapper = styled.div`
  margin-bottom: 1rem;`

export const Label = styled.label`
  display: block;
  font-size: 1rem;
  line-height: 1;
  padding-bottom: .3rem;
`

export const Form = styled.form`
  margin: 2rem 0;

  @media (max-width: 40rem) {
    margin: 0 auto;
  }
`

export const InputForm = styled.input`
  border: 1px solid ${({theme}) => theme['gray-100']};
  display: block;
  width: 100%;
  font-size: 1rem;
  padding: .8rem;
  border-radius: .4rem;
  background: ${({theme}) => theme['gray-100']};
  transition: .2s;

  &:focus, &:hover {
    outline: none;
    border-color: ${({theme}) => theme['yellow-500']};
    background: ${({theme}) => theme['white']};;
    box-shadow: 0 0 0 1px #fea;
  }
`
