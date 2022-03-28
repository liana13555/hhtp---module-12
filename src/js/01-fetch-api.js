/*
 * - HTTP-запросы в браузере - в интернете все передается по HTTP протоколу, все в виде текста
 *  - Fetch API  - для составления запросов к серверу и построен на промисах.
 *  - Владка Network
 *  - HTTP-методы - GET, POST, PUT и PATCH, DELETE
 *  - Заголовки
 *  - MIME-типы
 *  - Параметры запроса
 * - Документация REST API - бекенд построенный по REST-архитектуре. Служит прослойкой между
 *  клиентом и базой данных. Получаем данные в JSON-формате
 * - Обработка 404 с fetch
 * - Аутентификация
 * - Библиотеки-обёртки
 * - https://pokeapi.co/
 */
/*json() - парсит данные в JSON-формате.
text() - парсит данные в простом текстовом формате, например .csv (табличные данные).
blob() - парсит данные описывающие файл, например изображение, аудио или видео.
*/

import '../css/common.css';
import pokemonCardTpl from '../templates/pokemon-card.hbs';
import API from './api-service';
import getRefs from './get-refs';

// fetch('https://pokeapi.co/api/v2/pokemon/5')
//   .then(response => {
//     return response.json();
//   })
//   .then(pokemon => {
//     console.log(pokemon);
//     const markup = pokemonCardTpl(pokemon);
//     refs.cardContainer.innerHTML = markup;
//   })
//   .catch(error => {
//     console.log(error);
//   })

const refs = getRefs();

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const searchQuery = form.elements.query.value;
  // console.log(form.elements);

  API.fetchPokemon(searchQuery)
    .then(renderPokemonCard)
    .catch(onFetchError)
    .finally(() => form.reset());
}

function renderPokemonCard(pokemon) {
  const markup = pokemonCardTpl(pokemon);
  refs.cardContainer.innerHTML = markup;
}

function onFetchError(error) {
  alert('Упс, что-то пошло не так и мы не нашли вашего покемона!');
}


// =========== Параметры запроса ==============================

/* pokemon?limit=100&offset=200 - query string - параметры запроса - позволяют указать бекенду дополнительные критерии.
Символ ? указывает на старт параметров запроса.Каждый параметр это пара имя=значение.
Символ & используется для указания смыслового «И», разделяя параметры в строке запроса.
*/

// fetch('https://pokeapi.co/api/v2/pokemon?limit=10').then(r => r.json()).then(console.log)

const url = 'https://newsapi.org/v2/everything?q=cars';

const options = {
  headers: {
    Authorization: '4330ebfabc654a6992c2aa792f3173a3',
  },
};

fetch(url, options)
  .then(r => r.json())
  .then(console.log);
