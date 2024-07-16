import axios from 'axios';

//if u take this project live, need to change this URL to whatever running in host
export default axios.create({
    baseURL: 'http://localhost:3500'
});