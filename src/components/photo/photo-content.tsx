import React, { useContext } from 'react';
import {
  ButtonDeletePhoto,
  CloseButtonModal,
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
import { UserContext } from "../../context/userProvider";
import { UseFetch } from "../../hooks/useFetch";
import { PHOTO_DELETE } from "../../@api/api";

// @ts-ignore
export const PhotoContent: React.FC<any> = ({data, setModalPhoto}) => {
  const {photo, comments} = data
  const user = useContext(UserContext)
  const {request, loading} = UseFetch()
  
  async function handleDeletePhoto() {
    const confirm = window.confirm('Do you wish delete this photo?')
    const token = window.localStorage.getItem('token')
    const id = photo.id
    
    if (confirm) {
      const {url, options} = PHOTO_DELETE(id, token)
      const {response} = await request(url, options)
      if (response.ok) window.location.reload()
    }
    
  }
  
  return (
    <PhotoContainer>
      <CloseButtonModal size={20} onClick={() => setModalPhoto(false)}/>
      <PhotoImg>
        <img src={photo.src} alt={photo.title}/>
      </PhotoImg>
      
      <PhotoDetails>
        <PhotoDetailsHeader>
          
          {user.data.username === photo.author
            ? <ButtonDeletePhoto disabled={loading} onClick={handleDeletePhoto}>
              {loading
                ? 'Loading'
                : 'Delete'}
            </ButtonDeletePhoto>
            
            : <LinkAuthor to={`/profile/${photo.author}`}>
              @{photo.author}
            </LinkAuthor>
          }
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
