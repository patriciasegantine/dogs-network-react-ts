import React, { useEffect } from 'react';
import { UseFetch } from "../../../hooks/useFetch";
import { PHOTO_GET } from "../../../@api/api";
import { ErrorMessage } from "../../../global.styles";
import { Loading } from "../../helper/loading";
import { PhotoContent } from "../../photo/photo-content";
import { FeedModalContainer } from "../feed.styles";

export const FeedModal = ({photo, setModalPhoto}) => {
  
  const {data, error, loading, request} = UseFetch()
  
  useEffect(() => {
    const {url, options} = PHOTO_GET(photo.id)
    const {json} = request(url, options)
    
  }, [photo, request])
  
  const handleOutsideClick = (event) => {
    if (event.target === event.currentTarget) {
      setModalPhoto(null)
    }
    
  }
  
  return (
    <FeedModalContainer onClick={handleOutsideClick}>
      
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {loading && <Loading/>}
      {data && <PhotoContent data={data} setModalPhoto={setModalPhoto}/>}
    </FeedModalContainer>
  )
}
