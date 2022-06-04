import React from 'react';
import './Register.css';
import authLogoPath from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function Register() {
  const [authInfo, setAuthInfo] = React.useState({
    name: '',
    email: '',
    password: '',
  });

  function handleChange(e) {
    setAuthInfo({
      ...authInfo,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(authInfo);
    setAuthInfo({ ...authInfo, password: '' });
  }

  return (
    <div className="auth">
      <img src={authLogoPath} alt="логотип" className="auth__logo" />
      <h2 className="auth__welcome">Добро пожаловать!</h2>
      <form className="auth__form" onSubmit={handleSubmit}>
        <fieldset className="auth__form-set">
          <legend className="auth__legend">Имя</legend>
          <input
            type="name"
            name="name"
            value={authInfo.name}
            className="auth__input"
            onChange={handleChange}
            required
          />
          <legend className="auth__legend">E-mail</legend>
          <input
            type="email"
            name="email"
            value={authInfo.email}
            className="auth__input"
            onChange={handleChange}
            required
          />
          <legend className="auth__legend">Пароль</legend>
          <input
            type="password"
            name="password"
            value={authInfo.password}
            className="auth__input"
            onChange={handleChange}
            required
          />
          <button type="submit" className="auth__button auth__button_type_reg">
            Зарегистрироваться
          </button>
          <div className="auth__hint">
            <p className="auth__hint__question">Уже зарегистрированы?</p>
            <Link to="/signin" className="auth__hint__link">
              Войти
            </Link>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default Register;
