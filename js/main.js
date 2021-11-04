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
const priceHouse = document.querySelector('input[type="number"]');
const typeHouses = document.querySelectorAll('select[name="type"]');

