// First we need to import axios.js
import axios from 'axios';
// Next we make an 'instance' of it

export const endpoints = {
    shelters: "http://10.10.10.38:5001/api/shelter",
    pets: "http://10.10.10.38:5002/api/pet",
}

const instance = axios.create({
    // .. where we make our configurations
    // baseURL: 'http://10.10.10.38:5001/api/shelter'
});

// Where you would set stuff like your 'Authorization' header, etc ...
// instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';
instance.defaults.headers.post['Content+Type'] = 'application/json';

// Also add/ configure interceptors && all the other cool stuff

// instance.interceptors.request...

export default instance;