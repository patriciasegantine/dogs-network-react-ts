import { useState } from 'react'

interface Validation {
  email: ValidationTypes
  password: ValidationTypes
}

interface ValidationTypes {
  regex: any
  message: string
}

const typeValidation: Validation = {
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    
    message: 'fill in a correct email'
  },
  password: {
    regex: /^(?=.*\d)(?=.*[#?!@$%^&*-])(?=.*[a-z])(?=.*[A-Z]).{8,}$/g,
    
    message: 'your password must contain at least: 8 letter password, 1 symbol, 1 upper letters, 1 lower case letters and 1 number'
  }
}

export const UseForm = (type: string | number) => {
  const [value, setValue] = useState<any>('')
  const [error, setError] = useState<any>('')
  
  const validate = (value: string | any[]) => {
    if (!type) return true
    if (!value.length) {
      setError('Fill in a value')
      return false
    } else { // @ts-ignore
      if (typeValidation[type] && !typeValidation[type].regex.test(<any>value)) {
        // @ts-ignore
        setError(typeValidation[type].message)
        return false
      } else {
        setError(null)
        return true
      }
    }
  }
  
  const onChange = (event: { target: { value: string | any[] } }) => {
    if (error) {
      validate(event.target.value)
    }
    setValue(event.target.value)
  }
  
  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value)
  }
}
