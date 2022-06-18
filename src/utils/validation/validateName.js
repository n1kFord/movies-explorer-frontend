export function validateName(str) {
  const re = /^[а-яА-ЯёЁa-zA-Z0-9\s\-]+$/;
  return str ? re.test(str) && str.length >= 2 && str.length <= 30 : false;
}
