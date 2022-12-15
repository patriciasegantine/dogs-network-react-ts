import React from 'react'
import styles from './input.module.css'

export const Input = ({label, type, name, value, onChange}) => {
  return (
    <div className={styles.wrapper}>
      <label
        className={styles.label}
        htmlFor={name}
      >
        {label}
      </label>

      <input
        type={type}
        id={name}
        value={value}
        onChange={onChange}
        className={styles.input}
      />
      <p className={styles.error}>Error</p>
    </div>
  )
}