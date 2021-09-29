import axios from 'axios';
import axiosRetry from 'axios-retry';
import { readAccessToken } from '../features/localStorageService';

export const baseurl = "http://10.10.10.38"

export const microServices = {
    identity: baseurl + ":5001/api/identity",
    pets: baseurl + ":5002/api/pets",
    files: baseurl + ":5003/api/files",
    communication: baseurl + ":5004/api/communication"
}

export const endpoints = {
    shelters: microServices.identity + "/shelter",
    users: microServices.identity + "/user",
    auth: microServices.identity + "/auth",
    applications: microServices.identity + "/application",
    pets: microServices.pets + "/shelter/pet",
    messages: microServices.communication + "/message"
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