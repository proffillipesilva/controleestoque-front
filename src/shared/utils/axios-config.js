import axios from 'axios';


let store
let logout
let showFeedback

export const injectStore = _store => {
  store = _store
}

export const injectMethods = (_logout, _showFeedback) => {
    logout = _logout
    showFeedback = _showFeedback
  }
  


const axiosInstance = axios.create()

axiosInstance.defaults.baseURL = 'http://localhost:8080'; // Replace with your API base URL

axiosInstance.interceptors.request.use(
  (config) => {
    console.log(config)
    const token = store.getState().auth.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);



axiosInstance.interceptors.response.use(
    (response) => {
        console.log(response)
      if (response.status >= 200 && response.status < 400) {
        store.dispatch(
          showFeedback({
            type: 'success',
            message: 'Operation successful!',
            show: true,
          })
        );
      }
      return response;
    },
    (error) => {
      if (error.response) {
        if (error.response.status === 401) {
          store.dispatch(logout());
          window.location.href = '/';
        }
        store.dispatch(
          showFeedback({
            type: 'error',
            message: error.response.data.message || 'An error occurred.',
            show: true,
          })
        );
      } else {
        store.dispatch(
          showFeedback({
            type: 'error',
            message: 'Network error.',
            show: true,
          })
        );
      }
  
      return Promise.reject(error);
    }
  );
  

export default axiosInstance;