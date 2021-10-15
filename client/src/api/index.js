import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:5000/api/v1'

export const getUsers = () => axios.get('/users')
export const addUser = (data) => axios.post('/users/add', data)