import React, { useEffect, useState } from 'react';
// @ts-ignore
import { Input } from "../../../components/form/input";
import { ButtonPrimary, ErrorMessage } from "../../../global.styles";
import { UseForm } from "../../../hooks/useForm";
import { UseFetch } from "../../../hooks/useFetch";
import { PHOTO_POST } from "../../../@api/api";
import { ImgPreview, InputPhoto, PhotoSection } from "../user.styles";
import { useNavigate } from "react-router-dom";
import { RouteEnum } from "../../../@enum/Router-Enum";

export const UserPhotoPost = () => {
  const [img, setImg] = useState<any>({})
  
  const name = UseForm('')
  const weight = UseForm('number')
  const age = UseForm('number')
  
  const {data, error, loading, request} = UseFetch()
  const navigate = useNavigate()
  
  function handleSubmit(event: any) {
    event.preventDefault()
    
    const formData = new FormData()
    // @ts-ignore
    formData.append('img', img.raw)
    formData.append('nome', name.value)
    formData.append('peso', weight.value)
    formData.append('idade', age.value)
    
    const token = window.localStorage.getItem('token')
    const {url, options} = PHOTO_POST(formData, token)
    request(url, options)
    
  }
  
  // @ts-ignore
  function handleImgChange({target}) {
    setImg({
      raw: target.files[0],
      preview: URL.createObjectURL(target.files[0]),
    })
  }
  
  useEffect(() => {
    if (data) navigate(RouteEnum.userAccount)
  }, [data, navigate])
  
  return (
    <PhotoSection>
      <form onSubmit={handleSubmit}>
        <Input
          label={'Name'}
          type={'text'}
          name={'name'}
          {...name}
        />
        <Input
          label={'Weight'}
          type={'number'}
          name={'weight'}
          {...weight}
        />
        <Input
          label={'Age'}
          type={'number'}
          name={'age'}
          {...age}
        />
        <InputPhoto
          type={'file'}
          name={'img'}
          id={'img'}
          onChange={handleImgChange}
        />
        
        {
          loading
            ? <ButtonPrimary disabled> Posting... </ButtonPrimary>
            : <ButtonPrimary> Post </ButtonPrimary>
        }
        
        {
          error && <ErrorMessage>{error}</ErrorMessage>
        }
      
      </form>
      
      {img.preview &&
        <ImgPreview
          style={{backgroundImage: `url(${img.preview})`}}
        >

        </ImgPreview>}
    </PhotoSection>
  );
};
