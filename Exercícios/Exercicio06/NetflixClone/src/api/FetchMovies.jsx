const fetch = require('node-fetch');

const url = 'https://api.themoviedb.org/3/authentication';
const options = {method: 'GET', headers: {accept: 'application/json'}};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));

  /*
  Chave da API
  d20c92285e8a65ed04690d3346972b67
  */

  /*
  Token de Leitura da API
  eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjBjOTIyODVlOGE2NWVkMDQ2OTBkMzM0Njk3MmI2NyIsIm5iZiI6MTcyNzAxNTk0OC41NjE2MDYsInN1YiI6IjY2ZjAyMGRhNWVlNjFmYmI3MzhkODExNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A9BtGsnmxyd4T5BXdlYEyuHJme_plsAxDRXnnyhR1fc
  */