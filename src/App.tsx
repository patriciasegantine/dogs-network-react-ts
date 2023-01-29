import React from 'react'
import './global.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AppBody, AppContainer, GlobalStyle } from "./global.styles";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./@themes/defalultTheme";
import { UserProvider } from "./context/userProvider";
import { ProtectedRouter } from "./@constants/protected-router";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { Login } from "./view/login/login";
import { Home } from "./view/home/home";
import { User } from "./view/user/user";
import { Photo } from "./components/photo/components/photo";
import { UserProfile } from "./view/user/components/user-profile";
import { NotFound } from "./components/not-found/not-found";

function App() {
  
  return (
    <AppContainer>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <UserProvider>
            <GlobalStyle/>
            <Header/>
            
            <AppBody>
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
                
                <Route
                  path={'/photo/:id'}
                  element={<Photo/>}
                />
                
                <Route
                  path={'/profile/:user'}
                  element={<UserProfile/>}
                />
                
                <Route
                  path={'*'}
                  element={<NotFound/>}
                />
              
              </Routes>
            </AppBody>
            <Footer/>
          </UserProvider>
        </BrowserRouter>
      </ThemeProvider>
    </AppContainer>
  )
}

export default App
