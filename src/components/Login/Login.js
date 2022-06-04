import React from 'react';
import './Login.css';
import authLogoPath from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function Login() {
  const [authInfo, setAuthInfo] = React.useState({
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
      <h2 className="auth__welcome">Рады видеть!</h2>
      <form className="auth__form" onSubmit={handleSubmit}>
        <fieldset className="auth__form-set">
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
          <button type="submit" className="auth__button auth__button_type_log">
            Войти
          </button>
          <div className="auth__hint">
            <p className="auth__hint__question">Ещё не зарегистрированы?</p>
            <Link to="/signup" className="auth__hint__link">
              Регистрация
            </Link>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default Login;
