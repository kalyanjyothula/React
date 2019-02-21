import axios from 'axios';

export const reverse = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'
});