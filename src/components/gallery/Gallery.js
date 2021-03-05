import React from 'react';
import Card from '../card/Card';
import './Gallery.css';

const Gallery = ({ gallery }) => {
  const cards = gallery.map(value => (
    <div className="flip-box" key={value.id}>
      <Card imgData={value} />
    </div>
  ));

  return (
    <div className="gallery">{cards}</div>
  );
};

export default Gallery;
