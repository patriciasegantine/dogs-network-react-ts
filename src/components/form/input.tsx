import React from 'react'
import { InputForm, InputWrapper, Label } from './form.styles'
import { ErrorMessage } from '../../global.styles'

type Input = {
  label?: string
  type: string
  name: string
  value?: string
  id?: string
  error?: string
  onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

export const Input = ({label, type, name, value, error, onChange, onBlur}: Input) => {
  return (
    <InputWrapper>
      <Label htmlFor={name}>
        {label}
      </Label>
      
      <InputForm
        type={type}
        id={name}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputWrapper>
  )
}
