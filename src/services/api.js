import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://rocketnotes-api-1ti1.onrender.com'
});