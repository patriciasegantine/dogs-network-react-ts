import React, { useEffect } from 'react';
import { UseFetch } from '../../../hooks/useFetch'
import { PHOTO_GET } from "../../../constants/api";
import { ErrorMessage } from "../../../global.styles";
import { Loading } from "../../helper/loading";
import { FeedContainer, ImgContainer, ImgItem, ImgPhoto, Views } from "../feed.styles";
import { Eye } from "phosphor-react";

type photoType = {
  acessos: string;
  src: string | undefined;
  title: string | undefined;
  id: React.Key | null | undefined;
}

export const FeedPhotos = () => {
  
  const {data, loading, error, request} = UseFetch()
  
  
  
  useEffect(() => {
    
    async function fetchPhotos(){
      
      const {url, options } = PHOTO_GET({page: 1, total: 10, user: 0})
      // @ts-ignore
      const {response, json} = await request(url, options)
    
    
    console.log('oi', data)
    }
    
    fetchPhotos()
  
  }, [request])
  
  // @ts-ignore
  // @ts-ignore
  return (
    <FeedContainer>
  
      { loading
        ? <Loading/>
        : <ImgContainer>
          {
            data?.map((item: photoType) =>
              <ImgItem key={item.id}>
                <ImgPhoto src={item.src} alt={item.title} />
                <Views>
                  <Eye size={20} />
                  {item.acessos}
                </Views>
              </ImgItem>
          )
          }
        </ImgContainer>
      }
      
      <ErrorMessage>{error}</ErrorMessage>
    </FeedContainer>
  );
};
