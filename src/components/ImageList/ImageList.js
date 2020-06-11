import React from 'react';
import ImageCard from '../ImageCard/ImageCard';
import Wiggle from '..//Wiggle/Wiggle';

const ImageList = ({ images , onResubmit}) => {
  return (
    <div>
      {
        images.map(image => {
          return (
            <Wiggle
              key={image.id}
              elementId= {`ImageCard-${image.id}`}>
                <ImageCard
                  key={image.id}
                  id={image.id}
                  url={image.url}
                  onResubmit={onResubmit}
                />
            </Wiggle>
          );
        })
      }
    </div>
  );
}

export default ImageList;
