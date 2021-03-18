import axios from 'axios'

const baseURL = process.env.REACT_APP_API_URL

let axiosInstance
const createAxiosInstance = (token = '428r298jfw89u2rfoiwigfiegiet8u309goeopgfaa') => {
  const headers = token !== null ? {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
    "Accept": "application/json",
  } : {
    "Content-Type": "application/json",
    "Accept": "application/json",
  }
  axiosInstance = axios.create({
    headers,
    timeout: 30000,
  })

  return axiosInstance
}

// endpoints
const endpoint = {
  category: '/category', // get
}

export const getCategories = () => createAxiosInstance().get(`${baseURL}${endpoint.category}`).then(data => data).catch(err => console.log('error', err))
