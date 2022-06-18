import React from 'react';
import './Profile.css';
import { validateName, validateEmail } from '../../utils/validation/index';
import PreLoader from '../PreLoader/PreLoader';

function Profile({ name, email, isLoading, onInfoUpdate, onUserLeave, errorMessage, onClear }) {
  const [dataForChange, setDataForChange] = React.useState({ name, email });
  const [validationError, setValidationError] = React.useState('');
  const [isChanged, setIsChanged] = React.useState(false);

  const editButtonClassName = `profile__button ${isChanged ? 'profile__button_type_active' : ''}`;

  React.useEffect(() => {
    if (name !== dataForChange.name || email !== dataForChange.email) {
      if (!validateName(dataForChange.name) && !validateEmail(dataForChange.email)) {
        setValidationError('Имя пользователя и E-mail являются неккоректными');
        setIsChanged(false);
      } else if (!validateName(dataForChange.name)) {
        setValidationError('Имя пользователя короткое или содержит запрещенные символы');
        setIsChanged(false);
      } else if (!validateEmail(dataForChange.email)) {
        setValidationError('E-mail является неккоректным');
        setIsChanged(false);
      } else {
        setValidationError('');
        setIsChanged(true);
      }
    } else {
      setIsChanged(false);
    }
  }, [dataForChange]);

  React.useEffect(() => {
    setDataForChange({ name, email });
  }, [name, email]);

  React.useEffect(() => {
    onClear(); // очищение ошибки сервера при переходе обратно
  }, []);

  function handleChange(e) {
    setDataForChange({
      ...dataForChange,
      [e.target.name]: e.target.value,
    });
  }

  function onEditSave(e) {
    e.preventDefault();
    onInfoUpdate(dataForChange);
    setDataForChange({ ...dataForChange, name, email }); // возврат к валидной дате в случае ошибки
  }

  return (
    <section className="profile">
      <h1 className="profile__title">Привет, {name}!</h1>
      <div className="profile__info">
        <div className="profile__item">
          <h3 className="profile__item__key">Имя</h3>
          <input
            className="profile__item__value"
            value={dataForChange.name}
            type="text"
            name="name"
            onChange={handleChange}
          />
        </div>
        <div className="profile__item">
          <h3 className="profile__item__key">E-mail</h3>
          <input
            className="profile__item__value"
            value={dataForChange.email}
            type="email"
            name="email"
            onChange={handleChange}
          />
        </div>
      </div>
      <span className="profile__validation-error">{validationError}</span>
      <span className="profile__request-error">{errorMessage}</span>
      <PreLoader isLoading={isLoading} />
      <div className="profile__actions">
        <button
          type="button"
          className={editButtonClassName}
          onClick={onEditSave}
          disabled={!isChanged}
        >
          Редактировать
        </button>
        <button
          type="button"
          className="profile__button profile__button_type_leave"
          onClick={onUserLeave}
        >
          Выйти из аккаунта
        </button>
      </div>
    </section>
  );
}

export default Profile;
