import { setFormStateDisabled } from './form.js';
import { createPopup } from './popup.js';
import { getData } from './api.js';
let serverData = [];
setFormStateDisabled(true);
const address = document.querySelector('input[name="address"]');
const map = L.map('map-canvas');
map.on('load', () => {
  setTimeout(() => {
    setFormStateDisabled(false);
  }, 500);
});
map.setView(
  {
    lat: 35.6895,
    lng: 139.692,
  }, 10);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',

}).addTo(map);
const mainIcon = L.icon(
  {
    iconUrl: 'img/main-pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 52],
  });
const mainMarker = L.marker(
  {
    lat: 35.6895,
    lng: 139.692,
  },
  {
    icon: mainIcon,
    draggable: true,
  },
);
mainMarker.addTo(map);
address.value = `${mainMarker.getLatLng().lat.toFixed(5)}, ${mainMarker.getLatLng().lng.toFixed(5)}`;
mainMarker.on('moveend', (evt) => {
  address.value = `${evt.target.getLatLng().lat.toFixed(5)}, ${evt.target.getLatLng().lng.toFixed(5)}`;
});
const getAllMarkers = (data) => {

  console.log(data);
  const newData = data.slice(0, 10);
  for (let i = 0; i < newData.length; i++) {
    const icon = L.icon(
      {
        iconUrl: 'img/pin.svg',
        iconSize: [40, 40],
        iconAnchor: [20, 40],
      });
    const marker = L.marker(newData[i].location, { icon });
    marker.addTo(map);
    marker.bindPopup(createPopup(newData[i]));

  }
};
const mapFilters = document.querySelector('.map__filters');

mapFilters.addEventListener('change', () => {

  const filterData = serverData.filter(() => {

  });
  map.eachLayer((layer) => {

    if (layer.option && layer.option.icon) {
      layer.remove();
    }
  });
});
getData((data) => {
  getAllMarkers(data);
  serverData = data;
});


export { mainMarker, address, map };
