import React, { useEffect } from 'react';
import { UseFetch } from '../../../hooks/useFetch'
import { ErrorMessage } from "../../../global.styles";
import { Loading } from "../../helper/loading";
import { FeedContainer, FeedImg, FeedImgContainer, FeedImgItem, FeedViews } from "../feed.styles";
import { Eye } from "phosphor-react";
import { PHOTOS_GET } from "../../../@api/api";

type photoType = {
  acessos: string;
  src: string | undefined;
  title: string | undefined;
  id: React.Key | null | undefined;
}

export const FeedPhotos: React.FC<any> = ({setModalPhoto}) => {
  
  const {data, loading, error, request} = UseFetch()
  
  useEffect(() => {
    
    async function fetchPhotos() {
      
      const {url, options} = PHOTOS_GET({page: 1, total: 10, user: 0})
      // @ts-ignore
      const {json} = await request(url, options)
      
    }
    
    fetchPhotos()
    
  }, [request])
  
  useEffect(() => {
  
  }, [])
  
  // @ts-ignore
  return (
    <FeedContainer>
      
      {loading
        ? <Loading/>
        : <FeedImgContainer>
          {
            data?.map((photo: photoType) =>
              <FeedImgItem
                key={photo.id}
                onClick={() => setModalPhoto(photo)}
              >
                <FeedImg src={photo.src} alt={photo.title}/>
                <FeedViews>
                  <Eye size={20}/>
                  {photo.acessos}
                </FeedViews>
              </FeedImgItem>
            )
          }
        </FeedImgContainer>
      }
      
      <ErrorMessage>{error}</ErrorMessage>
    </FeedContainer>
  );
};
