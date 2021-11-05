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
const room = document.querySelector('select[name="rooms"]');
const campacity = document.querySelector('select[name="capacity"]');
const typeToValue = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};


type.addEventListener('change', () => {
  price.min = typeToValue[type.value];
  price.placeholder = `${typeToValue[type.value]}`;
});

const roomToCapacity = {
  1: [1],
  2: [1, 2],
  3: [1, 2, 3],
  100: [0],
};

room.addEventListener('change', () => {
  for (let i = 0; i < campacity.children.length; i++) {
    const option = campacity.children[i];
    option.disabled = true;
    const capacityValues = roomToCapacity[room.value];
    for (let j = 0; j < capacityValues.length; j++) {
      if (+option.value === capacityValues[j]) {
        option.disabled = false;
      }
    }
  }
});
