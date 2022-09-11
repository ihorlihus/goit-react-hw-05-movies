const axios = require('axios').default;
// https://api.themoviedb.org/3/movie/550?api_key=f632edb05cc91b97d9ccb27096819906

axios.defaults.baseURL = 'https://api.themoviedb.org/3/search/movie';
const myKey = 'f632edb05cc91b97d9ccb27096819906';

async function getMoves(searchName) {
  const responce = await axios.get('', {
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

// getMoves('batman').then(res => console.log(res));
export default getMoves;
