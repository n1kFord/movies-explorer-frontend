import React from 'react';
import './Techs.css';

function Techs() {
  return (
    <section className="techs">
      <div className="section__wrapper section__wrapper_type_techs">
        <h2 className="section__title">Технологии</h2>
        <div className="techs__container">
          <h3 className="techs__slogan">7 технологий</h3>
          <p className="techs__paragraph">
            На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
          </p>
          <div className="techs__languages">
            <p className="techs__languages__item">HTML</p>
            <p className="techs__languages__item">CSS</p>
            <p className="techs__languages__item">JS</p>
            <p className="techs__languages__item">React</p>
            <p className="techs__languages__item">Git</p>
            <p className="techs__languages__item">Express.js</p>
            <p className="techs__languages__item">mongoDB</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Techs;
