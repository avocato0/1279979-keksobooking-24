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


export { setFormStateDisabled };
