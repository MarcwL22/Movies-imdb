import axios from 'axios';

const APIKEY = 'f259c58a';

export const Api = axios.create({
  baseURL: `http://www.omdbapi.com/?apikey=${APIKEY}`
});
