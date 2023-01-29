import React, { useContext } from 'react';
import { Container } from "../../global.styles";
import { UserHeader } from "./components/user-header";
import { Route, Routes } from "react-router-dom";
import { UserPhotoPost } from "./components/user-photo-post";
import { UserMetrics } from "./components/user-metrics";
import { Feed } from "../../components/feed/feed";
import { UserContext } from "../../context/userProvider";
import { NotFound } from "../../components/not-found/not-found";

export const User = () => {
  
  const {data} = useContext<any>(UserContext)
  return (
    // <Section>
    <Container>
      <UserHeader/>
      
      <Routes>
        <Route
          path={'/'}
          element={<Feed user={data.id}/>}
        />
        
        <Route
          path={'/metrics'}
          element={<UserMetrics/>}
        />
        
        <Route
          path={'/post'}
          element={<UserPhotoPost/>}
        />
        
        <Route
          path={'*'}
          element={<NotFound/>}
        />
      
      </Routes>
    
    </Container>
    // </Section>
  );
};
