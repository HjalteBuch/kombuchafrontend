import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:5259' });

export const getBatches = () => api.get('/Batch');
export const getBottles = () => api.get('/Bottle');
export const getReviews = () => api.get('/BottleRating');
