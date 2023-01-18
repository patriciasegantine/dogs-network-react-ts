import React, { useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { UseFetch } from "../../../hooks/useFetch";
import { PHOTO_GET } from "../../../@api/api";
import { ErrorMessage } from "../../../global.styles";
import { Loading } from "../../helper/loading/loading";
import { PhotoContent } from "../photo-content";
import { RouteEnum } from "../../../@enum/Router-Enum";
import { PhotoContainer, PhotoContainerUrl } from "../photo-content.styles";

export const Photo = () => {
  
  const {id} = useParams()
  const {data, loading, error, request} = UseFetch()
  const navigate = useNavigate()
  
  useEffect(() => {
    const {url, options} = PHOTO_GET(id)
    request(url, options)
    
  }, [request, id])
  
  return (
    <>
      {
        loading
          ? <Loading/>
          : <>
            {data &&
              <PhotoContainerUrl>
                <PhotoContent data={data} onClick={() => navigate(RouteEnum.home)}/>
              </PhotoContainerUrl>
            }
          </>
      }
      
      {
        error &&
        <ErrorMessage>{error}</ErrorMessage>
      }
    </>
  );
};
