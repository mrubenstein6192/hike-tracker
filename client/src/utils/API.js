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

export const planHike = (hikeInfo) => {
  return axios.post('/api/plannedhikes', hikeInfo)
}

export const getPlannedHikes = () => {
  return axios.get('/api/plannedhikes')
}

export const getPlannedHikeById = (hikeId) => {
  return axios.get(`/api/plannedhikes/${hikeId}`)
}

export const removePlannedHike = (hikeId) => {
  return axios.delete(`/api/plannedhikes/${hikeId}`)
}

export default {
  getSavedHikes,
  getHikeById,
  createHike,
  removeHike,
  planHike,
  getPlannedHikes,
  getPlannedHikeById,
  removePlannedHike
}