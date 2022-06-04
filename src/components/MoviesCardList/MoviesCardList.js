import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ Cards, forSaved }) {
  return (
    <section className="card-list">
      <div className="card-list__container">
        {/* позже будет реализован рендер через .map, когда начну работу с api */}
        {Cards.map((card, i) => (
          <MoviesCard
            name={card.name}
            duration={card.duration}
            imageSrc={card.imageSrc}
            forSaved={forSaved}
            key={i}
          />
        ))}
      </div>
      {!forSaved && (
        <button type="button" className="card-list__button">
          Ещё
        </button>
      )}
    </section>
  );
}

export default MoviesCardList;
