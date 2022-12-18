import React from 'react'
import './global.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RouteEnum } from './constants/Router-Enum'
import { UserProvider } from "./context/userProvider";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { Login } from "./components/login/login";
import { Home } from "./view/home";
import { User } from "./view/user";
import { ProtectedRouter } from "./constants/protected-router";

function App() {
  
  return (
    <BrowserRouter>
      <UserProvider>
        <Header/>
        <Routes>
          <Route
            path={RouteEnum.home}
            element={<Home/>}
          />
          
          <Route
            path={RouteEnum.login}
            element={<Login/>}
          />
          
          <Route
            path={RouteEnum.userAccount}
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
