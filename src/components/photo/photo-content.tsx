import React from 'react';
import {
  CloseButtonModal,
  LinkAuthor, PhotoAttributes,
  PhotoContainer,
  PhotoDetails,
  PhotoDetailsHeader,
  PhotoImg,
  PhotoView
} from "./photo.styles";
import { Title } from "../../global.styles";
import { Link } from "react-router-dom";
import { Eye } from "phosphor-react";

export const PhotoContent = ({data, setModalPhoto}) => {
  
  const {photo, comments} = data
  
  return (
    <PhotoContainer>
      <CloseButtonModal size={20} onClick={() => setModalPhoto(null)}/>
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
      
      {/*{comments.map(comment =>*/}
      {/*  <PhotoComments key={comment.comment_post_ID}>*/}
      {/*    <CommentContent>{comment.comment_content}</CommentContent>*/}
      {/*    <CommentAuthor>{comment.comment_author}</CommentAuthor>*/}
      {/*  </PhotoComments>*/}
      {/*)}*/}
    
    </PhotoContainer>
  );
};
