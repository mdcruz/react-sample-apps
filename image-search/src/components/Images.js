import React from 'react';
import Gallery from 'react-photo-gallery';

const Images = props => {
  const newImages = props.images.map(image => {
    const { small } = image.urls;
    return { src: small, ...image };
  });

  return <Gallery photos={newImages} />;
};

export default Images;
