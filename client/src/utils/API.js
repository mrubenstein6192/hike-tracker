import axios from 'axios';

// set up functions for talking to our backend

export const getSavedHikes = () => {
  return axios.get('/api/hikes')
}

export const getHikeById = (hikeId) => {
  return axios.get(`/api/hikes/${hikeId}`)
}

export const createHike = (hikeInfo) => {
  return axios.post('/api/hikes', hikeInfo)
}

export const removeHike = (hikeId) => {
  return axios.delete(`/api/hikes/${hikeId}`)
}

export default {
  getSavedHikes,
  getHikeById,
  createHike,
  removeHike
}