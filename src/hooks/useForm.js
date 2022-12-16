import React, { useState } from 'react'

const typeValidation = {
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,

    message: 'fill in a correct email'
  },
  password: {
    regex: /^(?=.*\d)(?=.*[!@#$%^&*+-])(?=.*[a-z])(?=.*[A-Z]).{8,}$/g,

    message: 'your password must contain at least: 8 letter password, 1 symbol, 1 upper letters 1 lower case letters and 1 number'
  }
}

export const UseForm = (type) => {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')

  const validate = (value) => {
    if(!type) return true
    if(!value.length) {
      setError('Fill in a value')
      return false
    } else if (typeValidation[type] && !typeValidation[type].regex.test(value)) {
      setError(typeValidation[type].message)
      return false
    } else {
      setError(null)
      return true
    }
  }

  const onChange = (event) => {
    if(error){
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