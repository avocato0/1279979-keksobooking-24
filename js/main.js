function getRandomNumber (from, to) {
  const range = to - from;
  const randomNumber = Math.round(range * Math.random());
  const result = from + randomNumber;
  return result;
}

function getRandomFloatNumber (from, to, point) {
  const range = to - from;
  const randomNumber = range * Math.random();
  const result = from + randomNumber.toFixed(point);
  return result;
}

