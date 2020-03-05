import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-content.ingresso.com/'
});

export default api;

// v0/templates/highlights/1/partnership/home
