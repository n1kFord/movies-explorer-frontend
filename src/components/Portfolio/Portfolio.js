import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <div className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <div className="portfolio__container">
        <div className="portfolio__project">
          <a
            href="https://google.com"
            rel="noreferrer noopener"
            target="_blank"
            className="portfolio__project__title"
          >
            Статичный сайт
          </a>
          <a
            href="https://google.com"
            rel="noreferrer noopener"
            target="_blank"
            className="portfolio__project__icon"
          >
            ↗
          </a>
        </div>
        <div className="portfolio__project">
          <a
            href="https://google.com"
            rel="noreferrer noopener"
            target="_blank"
            className="portfolio__project__title"
          >
            Адаптивный сайт
          </a>
          <a
            href="https://google.com"
            rel="noreferrer noopener"
            target="_blank"
            className="portfolio__project__icon"
          >
            ↗
          </a>
        </div>
        <div className="portfolio__project">
          <a
            href="https://google.com"
            rel="noreferrer noopener"
            target="_blank"
            className="portfolio__project__title"
          >
            Одностраничное приложение
          </a>
          <a
            href="https://google.com"
            rel="noreferrer noopener"
            target="_blank"
            className="portfolio__project__icon"
          >
            ↗
          </a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
