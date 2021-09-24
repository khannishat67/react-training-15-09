import * as axios from 'axios';


const axiosClient = axios.create({
    baseURL: 'http://localhost:8080/',
    timeout: 5000
});
// Request interceptor
axiosClient.interceptors.request.use(function (config) {
    // JWT Token
    const token = localStorage.getItem('token');
    config.headers.Authorization = 'Bearer ' + token;
    return config;
});


export {axiosClient};