import axios from 'axios';

var base = (process.env.REACT_APP_API_URL || "http://localhost:8080")

const api = axios.create({ 
    baseURL: base 
});

export default api;