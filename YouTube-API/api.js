import axios from 'axios';

const KEY = 'AIzaSyCWM9N3fynXMBc3ifbst6MQEBgZPMyV2r8';
 export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:6,
        key:KEY
    }
 
 });    