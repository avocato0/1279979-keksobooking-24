const setFormStateDisabled = function (show) {
  const adForm = document.querySelector('.ad-form');
  const mapFilterForm = document.querySelector('.map__filters');
  const fieldsets = adForm.querySelectorAll('fieldset');
  const mapFilters = mapFilterForm.querySelectorAll('.map__filter');
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
export { setFormStateDisabled };
