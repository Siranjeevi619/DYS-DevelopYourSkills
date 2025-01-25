import React from 'react';
import PropTypes from 'prop-types';
import CarsoualCard from './CarsoualCard';

function CarouselEffect({ cards }) {
  return (
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {cards.length === 0 ? (
          <div className="carousel-item active">
            <p>No cards available</p>
          </div>
        ) : (
          cards.map((card, index) => (
            <div
              className={`carousel-item${index === 0 ? ' active' : ''}`}
              key={index}
            >
              <div className='d-flex justify-content-center'> 
              <CarsoualCard {...card} />
                </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

CarouselEffect.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CarouselEffect;
