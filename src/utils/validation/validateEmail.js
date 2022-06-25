export function validateEmail(str) {
  const re = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
  return re.test(str);
}
