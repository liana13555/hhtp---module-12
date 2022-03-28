/*
 * - Cross-Origin Resource Sharing (CORS) - «совместное использование ресурсов между разными источниками».
 *  - https://pokeapi.co/
 *  - https://darksky.net/dev
 * - Proxy
 *  - Хранение API ключей и секретов
 *  - https://lpj-weather-service.herokuapp.com/
 */
import '../css/common.css';

// fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//   .then(r => r.json())
//   .then(console.log)


fetch(
  'https://lpj-weather-service.herokuapp.com/weather?lat=39.916668&lon=116.383331',
)
  .then(r => r.json())
  .then(console.log);
