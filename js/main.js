function getRandomNumber (from, to) {
  let range = to - from;
  let randomNumber = Math.round(range * Math.random());
  let result = from + randomNumber;
  return result;
}

function getRandomNumberWithPoints (from, to, point) {
  let range = to - from;
  let randomNumber = range * Math.random();
  let result = from + randomNumber.toFixed(point);
  return result;
}

