import React from 'react';
import './Profile.css';

function Profile({ name, email }) {
  return (
    <section className="profile">
      <h1 className="profile__title">Привет, {name}!</h1>
      <div className="profile__info">
        <div className="profile__item">
          <h3 className="profile__item__key">Имя</h3>
          <p className="profile__item__value">{name}</p>
        </div>
        <div className="profile__item">
          <h3 className="profile__item__key">E-mail</h3>
          <p className="profile__item__value">{email}</p>
        </div>
      </div>
      <div className="profile__actions">
        <button type="button" className="profile__button">
          Редактировать
        </button>
        <button type="button" className="profile__button profile__button_type_leave">
          Выйти из аккаунта
        </button>
      </div>
    </section>
  );
}

export default Profile;
