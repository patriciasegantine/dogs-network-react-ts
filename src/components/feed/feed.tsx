import React from 'react';
import { FeedModal } from "./components/feed-modal";
import { FeedPhotos } from "./components/feed-photos";

export const Feed = () => {
  return (
    <div>
      <FeedModal/>
      <FeedPhotos/>
    </div>
  );
};
