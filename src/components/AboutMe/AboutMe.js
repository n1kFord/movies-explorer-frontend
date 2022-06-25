import React from 'react';
import './AboutMe.css';
import Portfolio from '../Portfolio/Portfolio';
import aboutMeImagePath from '../../images/about-me__image.png';

function AboutMe() {
  return (
    <section className="about-me">
      <div className="section__wrapper section__wrapper_type_about-me">
        <h2 className="section__title">Студент</h2>
        <div className="about-me__container">
          <div className="about-me__info">
            <h3 className="about-me__info__title">Никита</h3>
            <h4 className="about-me__info__subtitle">Junior Frontend-разработчик, 17 лет</h4>
            <p className="about-me__info__description">
              Я родился и живу в Казахстане, в данный момент закончил 10-ый класс. Активно занимаюсь
              спортом, учусь играть на гитаре и люблю вечерние прогулки. Ещё с детства
              заинтересовался программированием и, в частности, веб-разработкой. Прилагаю все
              усилия, чтобы совершенствоваться в этом направлении.
            </p>
            <div className="about-me__social">
              <a
                className="about-me__social__link"
                href="https://vk.com/hnslegend"
                rel="noreferrer noopener"
                target="_blank"
              >
                VK
              </a>
              <a
                className="about-me__social__link"
                href="https://github.com/n1kFord"
                rel="noreferrer noopener"
                target="_blank"
              >
                Github
              </a>
            </div>
          </div>
          <img src={aboutMeImagePath} alt="мое изображение" className="about-me__image" />
        </div>
        <Portfolio />
      </div>
    </section>
  );
}

export default AboutMe;
