import React from 'react';
import './Promo.css';
import promoImagePath from '../../images/promo__image.svg';

function Promo() {
  return (
    <section className="promo">
      <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
      <img src={promoImagePath} alt="изображение кривых" className="promo__image" />
    </section>
  );
}

export default Promo;
