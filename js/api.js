import { showAlert } from './utils/error.js';

const getData = (getAllMarkers) => {
  fetch('https://24.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((data) => getAllMarkers(data))
    .catch(() => {
      showAlert('Упс, что-то пошло не так');
    });
};

export { getData };
