import axios from 'axios';

// Shared axios instance. Base URL comes from VITE_API_URL (see .env),
// defaulting to "/api" which the Vite dev proxy forwards to Express.
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  headers: { 'Content-Type': 'application/json' },
});

export default api;
