import React from 'react';
import { PaperPlaneTilt } from "phosphor-react";
import { CommentButton, CommentForm, CommentTextArea } from "../photo-content.styles";

export const PhotoCommentsForm: React.FC<any> = ({onSubmit, value, onChange}) => {
  
  return (
    <CommentForm
      onSubmit={onSubmit}>
      
      <CommentTextArea
        id={'comment'}
        name={'comment'}
        placeholder={'your comment here...'}
        value={value}
        onChange={onChange}
      />
      
      <CommentButton>
        <PaperPlaneTilt size={25}/>
      </CommentButton>
    </CommentForm>
  );
};
