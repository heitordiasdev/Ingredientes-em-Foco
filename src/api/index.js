import axios from 'axios';

let base = process.env.REACT_APP_API_URL || process.env.REACT_APP_API

const api = axios.create({ 
    baseURL: base 
});

export default api;