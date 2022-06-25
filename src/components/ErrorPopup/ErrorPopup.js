import React from 'react';
import './ErrorPopup.css';
import errorPopupLogoPath from '../../images/error-popup__logo.png';

function ErrorPopup({ isOpen, film, onClose, forSaved }) {
  let popupClass = isOpen ? `error-popup error-popup_opened` : `error-popup`;
  let errorMessage = forSaved
    ? 'Фильм не удалось удалить.\n Пожалуйста, попробуйте ещё раз'
    : `Фильм не удалось сохранить.\n Пожалуйста, попробуйте ещё раз`;
  return (
    <article className={popupClass}>
      <div className="error-popup__container">
        <button type="button" className="error-popup__close-icon" onClick={onClose} />

        <h2 className="error-popup__title">Произошла ошибка</h2>
        <p className="error-popup__subtitle">{errorMessage}</p>
        <img src={errorPopupLogoPath} alt="ошибка" className="error-popup__logo" />
      </div>
    </article>
  );
}

export default ErrorPopup;
