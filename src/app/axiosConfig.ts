import axios from 'axios';
import axiosRetry from 'axios-retry';

export const endpoints = {
    shelters: "http://10.10.10.38:5001/api/shelter",
    pets: "http://10.10.10.38:5002/api/shelter/pet",
    auth: "http://10.10.10.38:5001/api/auth"
}

//-------------------------------------------------------------------------\\
// ------------------------- Unauthorized Instance-------------------------\\

const unauthorizedInstance = axios.create({
});

unauthorizedInstance.defaults.headers.post['Content+Type'] = 'application/json';

// unauthorizedInstance.interceptors.response.use(function (response) {
//     return response;
// }, function (error) {
//     // console.dir(error);
//     return Promise.reject(error);
// });


//-----------------------------------------------------------------------\\
// ------------------------- Authorized Instance-------------------------\\

const authorizedInstance = axios.create({
});

authorizedInstance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM unauthorizedInstance';
authorizedInstance.defaults.headers.post['Content+Type'] = 'application/json';

axiosRetry(authorizedInstance, {
    retries: 3,
})

authorizedInstance.interceptors.response.use((response) => {
    return response;

},
    (error) => {
        // console.log(error);
        return Promise.reject(error)

    });

export { unauthorizedInstance as AxiosUnauthorized, authorizedInstance as AxiosAuthorized };