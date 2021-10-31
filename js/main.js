import { similarGeneration } from './data/get-similar-generation.js';
import { createPopup } from './data/popup.js';
const mapCanvas = document.querySelector('.map__canvas');
const similarCardFragment = document.createDocumentFragment();
similarGeneration.forEach((object) => {
  const popup = createPopup(object);
  similarCardFragment.append(popup);
});

mapCanvas.append(similarCardFragment.children[0]);

