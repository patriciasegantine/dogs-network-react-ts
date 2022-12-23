import React, { useState } from 'react';
import { FeedModal } from "./components/feed-modal";
import { FeedPhotos } from "./components/feed-photos";

export const Feed: React<any> = () => {
  const [modalPhoto, setModalPhoto] = useState<any>(null)
  
  return (
    <div>
      {
        modalPhoto && <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto}/>
      }
      
      <FeedPhotos setModalPhoto={setModalPhoto}/>
    </div>
  );
};
