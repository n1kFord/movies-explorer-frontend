export function getDeclOfNum(n, words) {
  const value = Math.abs(n) % 100;
  const n1 = value % 10;
  if (value > 10 && value < 20) {
    return words[2];
  } else if (n1 > 1 && n1 < 5) {
    return words[1];
  } else if (n1 === 1) {
    return words[0];
  }
  return words[2];
}
