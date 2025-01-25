import React from 'react';
import CarouselEffect from './CarsoualEffect'; 

const cardData = [
  { title: 'React - Basics', author: 'CodeEvolution', image: 'reactImage.png' },
  { title: 'JavaScript - Advanced', author: 'CodeEvolution', image: 'jsImage.png' },
  { title: 'CSS - Grid', author: 'CodeEvolution', image: 'cssImage.png' },
];

function CarouselEffectPassCard() {
  return <CarouselEffect cards={cardData} />;
}

export default CarouselEffectPassCard;
