import axios from "axios";

// the link heroku deployed link

const baseURL = 'https://digialtar-api.herokuapp.com/';

const api = axios.create({
  baseURL: baseURL,
});

export default api;