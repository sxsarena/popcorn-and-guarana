import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-content.ingresso.com/',
  headers: { 'Content-Type': 'application/json' }
});

export default api;
