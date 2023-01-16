import React, { useEffect, useState } from 'react';
import { FeedModal } from "./components/feed-modal";
import { FeedPhotos } from "./components/feed-photos";

export const Feed: React.FC<any> = ({user}) => {
  const [modalPhoto, setModalPhoto] = useState<any>(null)
  const [pages, setPage] = useState<number[]>([1])
  const [infinitePage, setInfinitePage] = useState<boolean>(true)
  
  let wait = false
  
  function infiniteScroll() {
    
    if (infinitePage) {
      const scroll = window.scrollY
      const height = document.body.offsetHeight - window.innerHeight
      
      if (scroll > height * .75 && !wait) {
        setPage([...pages, pages.length + 1])
        wait = true
        setTimeout(() => {
          wait = false
        }, 500)
      }
    }
  }
  
  useEffect(() => {
    window.addEventListener('scroll', infiniteScroll)
    window.addEventListener('wheel', infiniteScroll)
    return () => {
      window.removeEventListener('scroll', infiniteScroll)
      window.removeEventListener('wheel', infiniteScroll)
    }
  }, [infinitePage])
  
  return (
    <div>
      {
        modalPhoto && <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto}/>
      }
      {
        pages.map((page: any) =>
          <FeedPhotos
            key={page}
            user={user}
            page={page}
            setModalPhoto={setModalPhoto}
            setInfinitePage={setInfinitePage}
          />
        )
      }
    </div>
  );
};
