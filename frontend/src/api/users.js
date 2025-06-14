import axios from 'axios';

const API = axios.create({
  baseURL: "http://localhost:8000/api/users",
});

export const getAllUsers = () => API.get('/');
export const getUser = (id) => API.get(`/${id}`);
export const createUser = (userData) => API.post('/', userData);
export const updateUser = (id) => API.put(`/${id}`);
export const deleteUser = (id) => API.delete(`/${id}`);