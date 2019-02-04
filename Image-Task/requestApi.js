import axios from 'axios';
export default axios.create({
    baseURL:'https://api.unsplash.com/',
    headers:{
        Authorization: 'Client-ID 3a942e75b3cdd850b7c8806aca57b950323474f6a684e5cb0040ba65344ee987'
    }
});