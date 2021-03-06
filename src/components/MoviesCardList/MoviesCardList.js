import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import ErrorPopup from '../ErrorPopup/ErrorPopup';

function MoviesCardList({
  Cards,
  forSaved,
  onCardSave,
  onCardDelete,
  savedCards,
  isErrorPopupOpened,
  onPopupClose,
  searchData,
}) {
  const [isFound, setIsFound] = React.useState(true);
  const [listLength, setListLength] = React.useState(12);

  let renderedMoviesLength = 0;
  let counter = 0;

  const notFoundHintClassName = `card-list__not-found ${
    isFound ? '' : 'card-list__not-found_type_active'
  }`;
  const emptyHintClassName = `card-list__empty ${
    Cards.length === 0 && forSaved ? 'card-list__empty_type_active' : ''
  }`;

  function checkCardForSave(id) {
    if (!forSaved) {
      return savedCards.some((card) => card.movieId === id);
    }
    return false;
  }

  function checkFilmDuration(time) {
    return searchData.isActive ? time <= 40 : time > 40;
  }

  function isCardFound(nameRU, nameEN, duration) {
    if (nameRU && nameRU.toLowerCase().includes(searchData.movie.toLowerCase())) {
      return checkFilmDuration(duration);
    } else if (nameEN && nameEN.toLowerCase().includes(searchData.movie.toLowerCase())) {
      return checkFilmDuration(duration);
    }
  }

  function addMoreFilms() {
    let amount = window.innerWidth > 768 ? 3 : window.innerWidth > 480 ? 2 : 2;
    setListLength(listLength + amount);
  }

  function createCard(card, uniqueId) {
    return (
      <MoviesCard
        name={card.nameRU}
        nameRU={card.nameRU}
        nameEN={card.nameEN}
        country={card.country}
        director={card.director}
        year={card.year}
        description={card.description}
        trailerLink={card.trailerLink}
        thumbnail={
          forSaved
            ? card.thumbnail
            : `https://api.nomoreparties.co${card.image.formats.thumbnail.url}`
        }
        movieId={forSaved ? card.movieId : card.id}
        duration={card.duration}
        image={forSaved ? card.image : `https://api.nomoreparties.co/${card.image.url}`}
        id={card._id}
        forSaved={forSaved}
        key={uniqueId}
        onSave={onCardSave}
        onDelete={onCardDelete}
        isActive={checkCardForSave(card.id)}
      />
    ); // ?????? ???????????????????? ???????????? ?????????????? ?? ????????????????????????
  }

  function updateList() {
    let width = window.innerWidth;
    let optimalLength = width > 768 ? 12 : width > 480 ? 8 : 5;
    setListLength(optimalLength);
  } // ???????????? ???????????????????? ????????????

  React.useEffect(() => {
    updateList();
    renderedMoviesLength = 0;
    window.addEventListener('resize', updateList);
    return () => {
      window.removeEventListener('resize', updateList);
    };
  }, []);

  React.useEffect(() => {
    if (searchData.movie.trim() !== '') {
      const arr = [];
      for (let i = 0; i < Cards.length; i++) {
        let card = Cards[i];
        if (isCardFound(card.nameRU, card.nameEN, card.duration)) {
          arr.push(card.id);
        }
      }
      arr.length === 0 ? setIsFound(false) : setIsFound(true);
    } else {
      setIsFound(true);
    }
  }, [searchData]); // ???????????? ?????? "???????????? ???? ??????????????"

  return (
    <section className="card-list">
      <span className={emptyHintClassName}>???????????? ?????????????????????? ?????????????? ????????...</span>
      <span className={notFoundHintClassName}>???????????? ???? ??????????????</span>
      <div className="card-list__container">
        <div className="error-popup"></div>
        {Cards.map((card, i) => {
          renderedMoviesLength += 1;
          let uniqueId = uuidv4();
          if (counter < listLength && isCardFound(card.nameRU, card.nameEN, card.duration)) {
            counter += 1;
            return createCard(card, uniqueId);
          }
        })}
      </div>
      <ErrorPopup isOpen={isErrorPopupOpened} onClose={onPopupClose} forSaved={forSaved} />
      {renderedMoviesLength - (window.innerWidth > 768 ? 3 : 2) >= listLength && (
        <button type="button" className="card-list__button" onClick={addMoreFilms}>
          ??????
        </button>
      )}
    </section>
  );
}

export default MoviesCardList;
