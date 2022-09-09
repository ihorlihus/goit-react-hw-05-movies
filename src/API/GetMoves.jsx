const axios = require('axios').default;
// https://api.themoviedb.org/3/movie/550?api_key=f632edb05cc91b97d9ccb27096819906

axios.defaults.baseURL = 'https://api.themoviedb.org/3/movie/550';
const myKey = 'f632edb05cc91b97d9ccb27096819906';

async function getMoves(searchName) {
  const responce = await axios.get('', {
    params: {
      api_key: myKey,
      query: searchName,
      include_adult: true,
      safesearch: true,
      page: 1,
    },
  });
  console.log(responce);
  return responce.data;
}

export default getMoves;
