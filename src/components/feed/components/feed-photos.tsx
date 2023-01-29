import React, { useEffect } from 'react';
import { UseFetch } from '../../../hooks/useFetch'
import { ErrorMessage } from "../../../global.styles";
import { Loading } from "../../helper/loading/loading";
import { FeedContainer, FeedImgContainer, FeedImgItem, FeedViews } from "../feed.styles";
import { Eye } from "phosphor-react";
import { PHOTOS_GET } from "../../../@api/api";
import { SkeletonImage } from "../../helper/skeleton-image/skeleton-image";

type photoType = {
  acessos: string;
  src: string | undefined;
  title: string | undefined;
  id: React.Key | null | undefined;
}

export const FeedPhotos: React.FC<any> = ({user, setModalPhoto, page, setInfinitePage}) => {
  
  const {data, loading, error, request} = UseFetch()
  
  useEffect(() => {
    
    async function fetchPhotos() {
      const totalItemsPage = 6;
      
      const {url, options} = PHOTOS_GET({
        page,
        totalItemsPage,
        user
      })
      // @ts-ignore
      const {response, json} = await request(url, options)
      if (response.ok && json.length < totalItemsPage) setInfinitePage(false)
    }
    
    fetchPhotos()
    
  }, [request, user, page])
  
  useEffect(() => {
  
  }, [setInfinitePage])
  
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
                <SkeletonImage src={photo.src} alt={photo.title}/>
                <FeedViews>
                  <Eye size={20}/>
                  {photo.acessos}
                </FeedViews>
              </FeedImgItem>
            )
          }
        </FeedImgContainer>
      }
      
      {
        error &&
        <ErrorMessage>{error}</ErrorMessage>
      }
    </FeedContainer>
  );
};
