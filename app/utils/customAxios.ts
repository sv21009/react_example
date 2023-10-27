import axios from "axios";

const customAxios = axios.create({
  baseURL: 'http://localhost:8000',
})

customAxios.interceptors.request.use(
  (config) => {
    const authenticationData = localStorage.getItem('authentication');

    if(authenticationData){
      console.log('authentication', authenticationData)
      config.headers['Authorization'] = `Bearer ${JSON.parse(authenticationData)}`;
    }

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
)

customAxios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const authenticationData = localStorage.getItem('authentication');

    if(error.response.status === 401 && authenticationData){
      localStorage.removeItem('authentication')
    }

    return Promise.reject(error)
  }
)

export default customAxios;