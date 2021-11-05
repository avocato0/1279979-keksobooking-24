//import { similarGeneration } from './data/get-similar-generation.js';
//import { createPopup } from './data/popup.js';
import { setFormStateDisabled } from './form/form.js';
/*const mapCanvas = document.querySelector('.map__canvas');
const similarCardFragment = document.createDocumentFragment();
similarGeneration.forEach((object) => {
  const popup = createPopup(object);
  similarCardFragment.append(popup);
});

mapCanvas.append(similarCardFragment.children[0]);
*/
setFormStateDisabled(false);

const price = document.querySelector('input[name="price"]');
const type = document.querySelector('select[name="type"]');
//const room = document.querySelector('select[name="rooms"]');
//const campacity = document.querySelector('select[name="capacity"]');
const typeToValue = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};
const typeToPlaceholder = {
  bungalow: '0',
  flat: '1000',
  hotel: '3000',
  house: '5000',
  palace: '10000',

};
/*const roomValue = {
  1: 3,
  2: 2,
  3: 1,
  100: 0,
};*/

type.addEventListener('change', () => {
  price.min = typeToValue[type.value];
  price.placeholder = typeToPlaceholder[type.value];
});

/*room.addEventListener('change', () => {
  if (campacity.value !== roomValue[room.value]) {
    campacity.remove(campacity.value);
  } else {
    campacity.value = roomValue[room.value]

  }

});*/
