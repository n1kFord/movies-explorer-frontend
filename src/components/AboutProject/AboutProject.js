import React from 'react';
import './AboutProject.css';

function AboutProject() {
  return (
    <section className="about-project">
      <div className="section__wrapper section__wrapper_type_about-project">
        <h2 className="section__title">О проекте</h2>
        <div className="about-project__tasks">
          <div className="about-project__task">
            <h3 className="about-project__task__title">Дипломный проект включал 5 этапов</h3>
            <p className="about-project__task__description">
              Составление плана, работу над бэкендом, вёрстку, добавление функциональности и
              финальные доработки.
            </p>
          </div>
          <div className="about-project__task">
            <h3 className="about-project__task__title">На выполнение диплома ушло 5 недель</h3>
            <p className="about-project__task__description">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы
              успешно защититься.
            </p>
          </div>
        </div>
        <div className="about-project__outline">
          <div className="about-project__info">
            <h3 className="about-project__info__title">1 неделя</h3>
            <p className="about-project__info__description">Back-end</p>
          </div>
          <div className="about-project__info about-project__info_type_frontend">
            <h3 className="about-project__info__title about-project__info__title_type_frontend">
              4 недели
            </h3>
            <p className="about-project__info__description">Front-end</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
