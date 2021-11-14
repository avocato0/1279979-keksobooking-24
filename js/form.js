import { mainMarker, address, map } from './map.js';


const adForm = document.querySelector('.ad-form');
const mapFilterForm = document.querySelector('.map__filters');
const resetButton = document.querySelector('.ad-form__reset');
const setFormStateDisabled = function (show) {
  const fieldsets = adForm.querySelectorAll('fieldset');
  const mapFilters = mapFilterForm.querySelectorAll('.map__filter');
  const mapFeatures = mapFilterForm.querySelectorAll('.map__features');
  for (let i = 0; i < mapFeatures.length; i++) {
    mapFeatures[i].disabled = show;
  }
  adForm.classList.toggle('.ad-form--disabled', show);
  mapFilterForm.classList.toggle('.map__filters--disabled', show);
  for (let i = 0; i < fieldsets.length; i++) {
    fieldsets[i].disabled = show;
  }
  for (let i = 0; i < mapFilters.length; i++) {
    mapFilters[i].disabled = show;
  }
};

const price = document.querySelector('input[name="price"]');
const type = document.querySelector('select[name="type"]');
const room = document.querySelector('select[name="rooms"]');
const campacity = document.querySelector('select[name="capacity"]');
const timein = document.querySelector('select[name="timein"]');
const timeout = document.querySelector('select[name="timeout"]');
const typeToValue = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

const onTypeChange = () => {
  price.min = typeToValue[type.value];
  price.placeholder = `${typeToValue[type.value]}`;
};
type.addEventListener('change', onTypeChange);
onTypeChange();
const roomToCapacity = {
  1: [1],
  2: [1, 2],
  3: [1, 2, 3],
  100: [0],
};
const onRoomChange = () => {
  for (let i = 0; i < campacity.children.length; i++) {
    const option = campacity.children[i];
    option.disabled = true;
    const capacityValues = roomToCapacity[room.value];
    for (let j = 0; j < capacityValues.length; j++) {
      if (+option.value === capacityValues[j]) {
        option.disabled = false;
        option.selected = true;
      }
    }
  }
};
room.addEventListener('change', onRoomChange);
onRoomChange();

timein.addEventListener('change', () => {
  const timeoutOptions = timeout.options;
  for (let i = 0; i < timeoutOptions.length; i++) {
    if (timein.value === timeoutOptions[i].value) {
      timeoutOptions[i].selected = true;
    }

  }
});
timeout.addEventListener('change', () => {
  const timeinOptions = timein.options;
  for (let i = 0; i < timeinOptions.length; i++) {
    if (timeout.value === timeinOptions[i].value) {
      timeinOptions[i].selected = true;
    }
  }
});
const resetForm = () => {
  mapFilterForm.reset();
  mainMarker.setLatLng({ lat: 35.6895, lng: 139.69200 });
  setTimeout(() => {
    address.value = `${35.6895} ${139.692}`;
  }, 0);
  map.closePopup();
};
resetButton.addEventListener('click', () => {
  resetForm();
});

const getSuccessMessage = () => {
  const body = document.querySelector('body');
  const successTemplate = document.querySelector('#success')
    .content
    .querySelector('.success');
  const successMessageElement = successTemplate.cloneNode(true);
  body.append(successMessageElement);


  successMessageElement.addEventListener('click', () => {
    successMessageElement.remove();
  });
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      successMessageElement.remove();
    }
  });
};

const getErrorMessage = () => {
  const body = document.querySelector('body');
  const errorTemplate = document.querySelector('#error')
    .content
    .querySelector('.error');
  const errorMessageElement = errorTemplate.cloneNode(true);
  const errorButton = errorMessageElement.querySelector('.error__button');
  body.append(errorMessageElement);

  errorButton.addEventListener('click', () => {
    errorMessageElement.remove();
  });
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      errorMessageElement.remove();
    }
  });
};
const setUserFormSubmit = () => {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    fetch('https://24.javascript.pages.academy/keksobookin',
      {
        method: 'POST',
        //headers:
        /*{
          'Content-Type': 'multipart/form-data',
        },*/
        body: formData,
        mode: 'no-cors',
      },
    )
      .then((response) => {
        if (response.ok) {
          resetForm();
          getSuccessMessage();
        } else {
          getErrorMessage();
        }
      })
      .catch(() => getErrorMessage());
  });
};

export { setFormStateDisabled, setUserFormSubmit };
