// First we need to import axios.js
import axios from 'axios';
// Next we make an 'unauthorizedInstance' of it

export const endpoints = {
    shelters: "http://10.10.10.38:5001/api/shelter",
    pets: "http://10.10.10.38:5002/api/pet",
}

// ------------------------- Unauthorized Instance

const unauthorizedInstance = axios.create({
    // .. where we make our configurations
    // baseURL: 'http://10.10.10.38:5001/api/shelter'
});

// Where you would set stuff like your 'Authorization' header, etc ...
// unauthorizedInstance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM unauthorizedInstance';
unauthorizedInstance.defaults.headers.post['Content+Type'] = 'application/json';

// Also add/ configure interceptors && all the other cool stuff

// unauthorizedInstance.interceptors.request...

// ------------------------- Authorized Instance

const authorizedInstance = axios.create({
    // .. where we make our configurations
    // baseURL: 'http://10.10.10.38:5001/api/shelter'
});

// Where you would set stuff like your 'Authorization' header, etc ...
authorizedInstance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM unauthorizedInstance';
authorizedInstance.defaults.headers.post['Content+Type'] = 'application/json';

export { unauthorizedInstance as AxiosUnauthorized, authorizedInstance as AxiosAuthorized };