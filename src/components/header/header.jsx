import React from 'react'
import { Link } from 'react-router-dom'
import styles from './header.module.css'
import { PawPrint, User } from 'phosphor-react'

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`container ${styles.nav}`}>
        <Link to={'/'} aria-label={'Dogs - Home'} className={styles.logo}>
          <PawPrint size={25}/>
        </Link>
        <Link to={'/login'} className={styles.login}>
          Login | Criar
          <User size={16}/>
        </Link>
      </nav>

    </header>
  )
}