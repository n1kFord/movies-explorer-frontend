export function validatePassword(str) {
  const re = /[a-zA-Z0-9]+/;
  return re.test(str);
}
