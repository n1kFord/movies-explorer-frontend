import React from 'react';
import './Register.css';
import authLogoPath from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import { useValidateAuthorization } from '../../utils/hooks/useValidateAuthorization';
import PreLoader from '../PreLoader/PreLoader';

function Register(props) {
  const [authInfo, setAuthInfo] = React.useState({
    name: '',
    email: '',
    password: '',
  });

  const { blurHandler, isFormValid, formName, formEmail, formPassword } = useValidateAuthorization(
    authInfo,
    'reg'
  );

  React.useEffect(() => {
    props.onClear();
  }, []);

  const nameDirty = formName.isTouched;
  const nameError = formName.error;

  const emailDirty = formEmail.isTouched;
  const emailError = formEmail.error;

  const passwordDirty = formPassword.isTouched;
  const passwordError = formPassword.error;

  const buttonClass = `auth__button ${
    isFormValid ? 'auth__button_type_active' : ''
  } auth_button_type_reg`;

  const nameInputClass = !nameDirty
    ? 'auth__input'
    : `auth__input auth__input_type_${!nameError ? 'success' : 'error'}`;
  const emailInputClass = !emailDirty
    ? 'auth__input'
    : `auth__input auth__input_type_${!emailError ? 'success' : 'error'}`;
  const passwordInputClass = !passwordDirty
    ? 'auth__input'
    : `auth__input auth__input_type_${!passwordError ? 'success' : 'error'}`;

  function handleChange(e) {
    setAuthInfo({
      ...authInfo,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onClear();
    props.onAuthRegister(authInfo);
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
            className={nameInputClass}
            onChange={handleChange}
            onBlur={blurHandler}
            required
          />
          {nameDirty && nameError && <span className="auth__error">{nameError}</span>}
          <legend className="auth__legend">E-mail</legend>
          <input
            type="email"
            name="email"
            value={authInfo.email}
            className={emailInputClass}
            onChange={handleChange}
            onBlur={blurHandler}
            required
          />
          {emailDirty && emailError && <span className="auth__error">{emailError}</span>}
          <legend className="auth__legend">Пароль</legend>
          <input
            type="password"
            name="password"
            value={authInfo.password}
            className={passwordInputClass}
            onChange={handleChange}
            onBlur={blurHandler}
            required
          />
          {passwordDirty && passwordError && <span className="auth__error">{passwordError}</span>}
          <PreLoader isLoading={props.isLoading} />

          <div className="auth__submit-container">
            <span className="auth__request-error">{props.errorMessage}</span>
            <button type="submit" className={buttonClass} disabled={!isFormValid}>
              Зарегистрироваться
            </button>
          </div>
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
