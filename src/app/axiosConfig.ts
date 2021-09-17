import axios from 'axios';
import axiosRetry from 'axios-retry';
import { readAccessToken } from '../features/localStorageService';

export const baseurl = "http://10.10.10.38"

export const endpoints = {
    shelters: baseurl + ":5001/api/shelter",
    auth: baseurl + ":5001/api/auth",
    users: baseurl + ":5001/api/user",
    pets: baseurl + ":5002/api/shelter/pet",
    applications: baseurl + ":5001/api/application",
}

//-------------------------------------------------------------------------\\
// ------------------------- Unauthorized Instance-------------------------\\

const unauthorizedInstance = axios.create({
});

unauthorizedInstance.defaults.headers.post['Content+Type'] = 'application/json';

unauthorizedInstance.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
});


//-----------------------------------------------------------------------\\
// ------------------------- Authorized Instance-------------------------\\

const authorizedInstance = axios.create({});

const token = `Bearer ${readAccessToken()}`

authorizedInstance.defaults.headers.common['Authorization'] = token;
authorizedInstance.defaults.headers.post['Content+Type'] = 'application/json';

// axios.interceptors.request.use(
//    config => {
//        const token = localStorageService.getAccessToken();
//        if (token) {
//            config.headers['Authorization'] = 'Bearer ' + token;
//        }
//        // config.headers['Content-Type'] = 'application/json';
//        return config;
//    },
//    error => {
//        Promise.reject(error)
//    });

axiosRetry(authorizedInstance, {
    retries: 2,
})

authorizedInstance.interceptors.response.use((response) => {
    return response;
},
    (error) => {
        // console.log(error);
        return Promise.reject(error)

    });

export { unauthorizedInstance as AxiosUnauthorized, authorizedInstance as AxiosAuthorized };