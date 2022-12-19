import React from 'react'
import './global.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GlobalStyle } from "./global.styles";
import { UserProvider } from "./context/userProvider";
import { ProtectedRouter } from "./constants/protected-router";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { Login } from "./view/login/login";
import { Home } from "./view/home/home";
import { User } from "./view/user/user";

function App() {
  
  return (
    <BrowserRouter>
      <UserProvider>
        <GlobalStyle/>
        <Header/>
        <Routes>
          <Route
            path={'/'}
            element={<Home/>}
          />
          
          <Route
            path={'/login/*'}
            element={<Login/>}
          />
          
          <Route
            path={'/account/*'}
            element={
              <ProtectedRouter>
                <User/>
              </ProtectedRouter>
            }
          />
        </Routes>
        <Footer/>
      </UserProvider>
    </BrowserRouter>
  )
}

export default App
