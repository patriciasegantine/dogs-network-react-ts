import React from 'react'
import './global.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './view/home'
import { Footer } from './components/footer/footer'
import { Login } from './components/login/login'
import { Header } from './components/header/header.tsx'
import { UserProvider } from './context/userProvider.tsx'

function App() {

  return (
    <BrowserRouter>
      <UserProvider>
        <Header/>
        <Routes>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/login/*'} element={<Login/>}/>
        </Routes>
        <Footer/>
      </UserProvider>
    </BrowserRouter>
  )
}

export default App
