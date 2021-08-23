import axios from 'axios';

export const endpoints = {
    shelters: "http://10.10.10.38:5001/api/shelter",
    pets: "http://10.10.10.38:5002/api/pet",
}

// ------------------------- Unauthorized Instance

const unauthorizedInstance = axios.create({
});

// Where you would set stuff like your 'Authorization' header, etc ...
unauthorizedInstance.defaults.headers.post['Content+Type'] = 'application/json';

unauthorizedInstance.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    // console.dir(error);
    return Promise.reject(error);
});


//-----------------------------------------------------------------------\\
// ------------------------- Authorized Instance-------------------------\\

const authorizedInstance = axios.create({
});

authorizedInstance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM unauthorizedInstance';
authorizedInstance.defaults.headers.post['Content+Type'] = 'application/json';

export { unauthorizedInstance as AxiosUnauthorized, authorizedInstance as AxiosAuthorized };