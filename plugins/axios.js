import axios from "axios";

axios.interceptors.request.use(
  function (config) {
    config.baseURL = process.env.NUXT_ENV_BACKEND_URL;
    // try {
    //   config.headers['PHPSESSID'] = localStorage.getItem('PHPSESSID')
    // } catch (error) {
    //   console.log(error)
    // }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
