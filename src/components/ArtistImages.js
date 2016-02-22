import React, { Component } from 'react';

const ArtistImages = ({images}) => {
  const artistImage = images[1].url;

  return <img src={artistImage} alt="picture of artist" />
}


export default ArtistImages;
