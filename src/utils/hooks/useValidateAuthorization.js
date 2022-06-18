import React from 'react';
import { validateName, validateEmail, validatePassword } from '../validation/index';

export function useValidateAuthorization({ name, email, password }, type) {
  const [formName, setFormName] = React.useState({ error: '', isTouched: false });
  const [formEmail, setFormEmail] = React.useState({ error: '', isTouched: false });
  const [formPassword, setFormPassword] = React.useState({ error: '', isTouched: false });

  const [isFormValid, setIsFormValid] = React.useState(false);

  function blurHandler(e) {
    switch (e.target.name) {
      case 'name':
        setFormName({ ...formName, isTouched: true });
        break;
      case 'email':
        setFormEmail({ ...formEmail, isTouched: true });
        break;
      case 'password':
        setFormPassword({ ...formPassword, isTouched: true });
        break;
    }
  }

  React.useEffect(() => {
    if (!validateName(name) && type === 'reg') {
      setFormName({ ...formName, error: 'Неккоректное имя' });
    } else {
      setFormName({ ...formName, error: '' });
    }
    if (!validateEmail(email)) {
      setFormEmail({ ...formEmail, error: 'Неккоректный E-mail' });
    } else {
      setFormEmail({ ...formEmail, error: '' });
    }
    if (!validatePassword(password)) {
      setFormPassword({ ...formPassword, error: 'Пароль является пустым' });
    } else {
      setFormPassword({ ...formPassword, error: '' });
    }
  }, [name, email, password]);

  React.useEffect(() => {
    if (formName.error || formEmail.error || formPassword.error) {
      setIsFormValid(false);
    } else {
      setIsFormValid(true);
    }
  }, [formName.error, formEmail.error, formPassword.error]);

  return { blurHandler, isFormValid, formName, formEmail, formPassword };
}
