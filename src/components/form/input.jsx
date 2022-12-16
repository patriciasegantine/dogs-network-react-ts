import React from 'react'
import styles from './input.module.css'

export const Input = ({label, type, name, value, onChange, error,onBlur }) => {
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
        onBlur={onBlur}
        onChange={onChange}
        className={styles.input}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  )
}