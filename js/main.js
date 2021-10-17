const TITLE = [
  "Квартира студия в престижном районе",
  "Тихая квартирка недалеко от метро",
  "Императорский дворец в центре Токио",
  "Небольшая бюджетная комната для студентов",
  "Уютное гнездышко для молодоженов",
  "Стандартная квартира в центре",
  "Милое гнездышко для фанатов Анимэ",
  "Хостел «Для друзей»",
  "Отель-музей",
  "Загородный дом для спокойного отдыха"
]
const TYPE = [
  "palace",
  "flat",
  "house",
  "bungalow",
  "hotel",
]
const CHECKIN = [
  "12:00",
  "13:00",
  "14:00",
]
const CHECKOUT = [
  "12:00",
  "13:00",
  "14:00",
]
const FEATURES = [
  "wifi",
  "dishwasher",
  "parking",
  "washer",
  "elevator",
  "conditioner"
];
const DESCRIPTION = [
  "Комната в трёхкомнатной квартире, подойдёт молодым путешественникам.",
  "У нас тут все ништяк. Ларек за углом. Шава 24 часа. Приезжайте! Интернетов нет!",
  "Хейтеров просьба не беспокоить.",
  "Великолепная лавочка прямо в центре парка. Подходит для всех кто любит спать на свежем воздухе.",
  "Замечательный дворец в старинном центре города. Только для тех кто может себе позволить дворец. Лакеев и прочих жокеев просим не беспокоить.",
  "Маленькая чистая квратира на краю парка. Без интернета, регистрации и СМС.",
  "Квартира на первом этаже. Соседи тихие. Для всех, кто терпеть не может шума и суеты.",
  "Замечательный дворец в старинном центре города. Только для тех кто может себе позволить дворец. Лакеев и прочих жокеев просим не беспокоить.",
  "Великолепная квартира-студия в центре Токио. Подходит как туристам, там и бизнесменам. Квартира полностью укомплектована и имеет свежий ремонт.",
];
const PHOTOS = [
  "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg",
  "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg",
  "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg"
];

const getRandomGeneration = function () {
  const randomNumber = _.random(1, 10)
  const randomTitle = _.random(0, TITLE.length - 1)
  const randomPrice = _.random(10000, 100000)
  const randomType = _.random(0, TYPE.length - 1)
  const randomRooms = _.random(1, 9)
  const randomGuests = _.random(1, 18)
  const randomCheckin = _.random(0, CHECKIN.length - 1)
  const randomCheckout = _.random(0, CHECKOUT.length - 1)
  const randomDescription = _.random(0, DESCRIPTION.length - 1)
  const randomPhotos = _.random(0, PHOTOS.length - 1)
  const randomLat = _.random(35.65000, 35.70000).toFixed(5)
  const randomLng = _.random(139.70000, 139.80000).toFixed(5)
  const randomAdress = randomLat + ' ' + randomLng
  const randomFeaturesArr = [];

  for (let i = 0; i < FEATURES.length; i++) {
    const randomFeatures = Math.random();
    const roundedNumber = Math.round(randomFeatures);


    if (roundedNumber) {
      randomFeaturesArr.push(FEATURES[i])
    }
  }

  return {
    author: {
      avatar: "img/avatars/user" + (randomNumber > 9 ? randomNumber : "0" + randomNumber) + ".png"
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
    }
  }
}


const similarGeneration = Array.from({ length: 11 }, getRandomGeneration);
console.log(similarGeneration);
