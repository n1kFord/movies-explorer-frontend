import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="section__wrapper section__wrapper_type_footer">
        <p className="footer__total">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className="footer__container">
          <p className="footer__copyright">© 2022</p>
          <div className="footer__social">
            <a
              href="https://practicum.yandex.ru/"
              rel="noreferrer noopener"
              target="_blank"
              className="footer__social__link"
            >
              Яндекс.Практикум
            </a>
            <a
              href="https://github.com/topics/yandex-praktikum"
              rel="noreferrer noopener"
              target="_blank"
              className="footer__social__link"
            >
              Github
            </a>
            <a
              href="https://www.facebook.com/yandex/"
              rel="noreferrer noopener"
              target="_blank"
              className="footer__social__link"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
