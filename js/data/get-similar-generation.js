import { TITLE, TYPE, CHECKIN, CHECKOUT, FEATURES, DESCRIPTION, PHOTOS } from './data.js';

const getRandomGeneration = function () {
  const randomNumber = _.random(1, 10);
  const randomTitle = _.random(0, TITLE.length - 1);
  const randomPrice = _.random(10000, 100000);
  const randomType = _.random(0, TYPE.length - 1);
  const randomRooms = _.random(1, 9);
  const randomGuests = _.random(1, 18);
  const randomCheckin = _.random(0, CHECKIN.length - 1);
  const randomCheckout = _.random(0, CHECKOUT.length - 1);
  const randomDescription = _.random(0, DESCRIPTION.length - 1);
  const randomPhotos = _.random(0, PHOTOS.length - 1);
  const randomLat = _.random(35.65000, 35.70000).toFixed(5);
  const randomLng = _.random(139.70000, 139.80000).toFixed(5);
  const randomAdress = randomLat + ' ' + randomLng;
  const randomFeaturesArr = [];

  for (let i = 0; i < FEATURES.length; i++) {
    const randomFeatures = Math.random();
    const roundedNumber = Math.round(randomFeatures);


    if (roundedNumber) {
      randomFeaturesArr.push(FEATURES[i]);
    }
  }

  return {
    author: {
      avatar: 'img/avatars/user' + (randomNumber > 9 ? randomNumber : '0' + randomNumber) + '.png'
    },
    offer: {
      title: TITLE[randomTitle],
      adress: randomAdress,
      price: randomPrice,
      type: TYPE[randomType],
      rooms: randomRooms,
      guests: randomGuests,
      checkin: CHECKIN[randomCheckin],
      checkout: CHECKOUT[randomCheckout],
      features: randomFeaturesArr,
      description: DESCRIPTION[randomDescription],
      photos: PHOTOS[randomPhotos],
    },
    location: {
      lat: +randomLat,
      lng: +randomLng,
    },
  };
};

export { getRandomGeneration };
