import React from 'react';
import {
  LinkAuthor, PhotoAttributes,
  PhotoContainer,
  PhotoDetails,
  PhotoDetailsHeader,
  PhotoImg,
  PhotoView
} from "./photo-content.styles";
import { Title } from "../../global.styles";
import { Link } from "react-router-dom";
import { Eye } from "phosphor-react";
import { PhotoComments } from "./components/photo-comments";

// @ts-ignore
export const PhotoContent: React.FC<any> = ({data}) => {
  
  const {photo, comments} = data
  
  return (
    <PhotoContainer>
      {/*<CloseButtonModal size={20} onClick={() => setModalPhoto(null)}/>*/}
      <PhotoImg>
        <img src={photo.src} alt={photo.title}/>
      </PhotoImg>
      
      <PhotoDetails>
        <PhotoDetailsHeader>
          <LinkAuthor to={`/profile/${photo.author}`}>
            @{photo.author}
          </LinkAuthor>
          <PhotoView><Eye size={20}/> {photo.acessos}</PhotoView>
        </PhotoDetailsHeader>
        
        <Title>
          <Link to={`/photo/${photo.id}`}>{photo.title}</Link>
        </Title>
        
        <PhotoAttributes>
        <span>{photo.idade === 1
          ? `${photo.idade} year`
          : `${photo.idade} years`}
        </span>
          
          <span>{photo.peso} kg</span>
        </PhotoAttributes>
      </PhotoDetails>
      
      <PhotoComments comments={comments} id={photo.id}/>
    
    </PhotoContainer>
  );
};
