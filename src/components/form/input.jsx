import React from 'react'
import { InputForm, InputWrapper, Label } from './form.styles'
import { ErrorMessage } from '../../global.styles'

export const Input = ({label, type, name, value, onChange, error, onBlur}) => {
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
