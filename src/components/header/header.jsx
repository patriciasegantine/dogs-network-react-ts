import React from 'react'
import { Link } from 'react-router-dom'
import styles from './header.module.css'
import { PawPrint, User } from 'phosphor-react'
import { UserContext } from '../../use-context/userProvider.jsx'


export const Header = () => {
  const {data} = React.useContext(UserContext)

  return (
    <header className={styles.header}>
      <nav className={`container ${styles.nav}`}>
        <Link to={'/'} aria-label={'Dogs - Home'} className={styles.logo}>
          <PawPrint size={35}/>
        </Link>

        {data ? (
          <Link  className={styles.login} to={'/account'}>
            {data.email}
            <User size={16}/>
          </Link>
        ) : (
          <Link className={styles.login} to={'/login'} >
            Login | Sing In
            <User size={16}/>
          </Link>
          )
        }

      </nav>

    </header>
  )
}