import React from 'react';
import './MoviesCard.css';
import { useNavigate, Navigate } from 'react-router-dom';
import { getDeclOfNum } from '../../utils/numberDeclension';

function MoviesCard({
  name,
  nameRU,
  nameEN,
  country,
  director,
  year,
  description,
  trailerLink,
  thumbnail,
  movieId,
  duration,
  image,
  id,
  forSaved,
  onSave,
  onDelete,
  isActive,
}) {
  const navigate = useNavigate();

  let buttonClass;
  let buttonText;

  if (isActive) {
    buttonClass = `card-list__item__button card-list__item__button_type_active`;
    buttonText = '✓';
  } else if (!forSaved) {
    buttonClass = 'card-list__item__button';
    buttonText = 'Сохранить';
  } else {
    buttonClass = 'card-list__item__button card-list__item__button_type_delete';
    buttonText = (
      <svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.06029 3.3822L7.29955 1.14294L6.23889 0.0822754L3.99962 2.32154L1.76048 0.0823915L0.699821 1.14305L2.93896 3.3822L0.582031 5.73913L1.64269 6.79979L3.99963 4.44286L6.35667 6.79991L7.41734 5.73925L5.06029 3.3822Z"
          fill="black"
        />
      </svg>
    );
  }
  function saveCard() {
    onSave({
      nameRU,
      nameEN,
      country,
      director,
      year,
      description,
      trailerLink,
      thumbnail,
      movieId,
      duration,
      image,
    });
  }

  function deleteCard() {
    onDelete(id);
  }

  function convertMinute(n) {
    return `${n} ${getDeclOfNum(n, ['минута', 'минуты', 'минут'])}`;
  }

  return (
    <div className="card-list__item">
      <div className="card-list__item__info">
        <p className="card-list__item__name">{name}</p>
        <p className="card-list__item__duration">{convertMinute(duration)}</p>
      </div>
      <a href={trailerLink} rel="noreferrer noopener" target="_blank">
        <img src={image} alt="изображение фильма" className="card-list__item__image" />
      </a>
      <button
        type="button"
        className={buttonClass}
        disabled={isActive}
        onClick={forSaved ? deleteCard : saveCard}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default MoviesCard;
