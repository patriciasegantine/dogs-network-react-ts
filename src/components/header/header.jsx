import React from 'react'
import { Link } from 'react-router-dom'
import styles from './header.module.css'
import { Dog, User } from 'phosphor-react'
import { UserContext } from '../../use-context/userProvider.jsx'
import { RouteEnum } from '../../Router-Enum'

export const Header = () => {
  const {userLogout, data} = React.useContext(UserContext)

  return (
    <header className={styles.header}>
      <nav className={`container ${styles.nav}`}>
        <Link to={'/'} aria-label={'Dogs - Home'} className={styles.logo}>
          {/*<PawPrint size={35}/>*/}
          <Dog size={35}/>
        </Link>

        {data ? (
          <>
            <Link className={styles.login} to={RouteEnum.account}>
              {data.email}
              <User size={16}/>
            </Link>
            <button onClick={() => userLogout()}>sair</button>
          </>
        ) : (
          <Link className={styles.login} to={RouteEnum.login}>
            Login | Sing In
            <User size={16}/>
          </Link>
        )
        }


      </nav>

    </header>
  )
}