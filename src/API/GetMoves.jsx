const axios = require('axios').default;
// https://api.themoviedb.org/3/movie/550?api_key=f632edb05cc91b97d9ccb27096819906

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const myKey = 'f632edb05cc91b97d9ccb27096819906';

export async function getSearchMoves(searchName) {
  const responce = await axios.get('search/movie', {
    params: {
      api_key: myKey,
      language: 'en-US',
      query: searchName,
      include_adult: true,
      safesearch: true,
      page: 1,
    },
  });
  const moves = await responce.data.results;
  return moves;
}

export async function getTrandMoves() {
  const responce = await axios.get('trending/movie/day', {
    params: {
      api_key: myKey,
    },
  });
  const moves = await responce.data.results;
  return moves;
}

// getMoves('batman').then(res => console.log(res));
