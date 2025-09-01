module.exports = function reverse(number) {
  const s = Math.abs(number).toString();
  let result = '';

  for (let i = s.length - 1; i >= 0; i -= 1) {
    result += s[i];
  }

  return Number(result);
};
