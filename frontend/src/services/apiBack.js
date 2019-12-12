import axios from 'axios';

const apiBack = axios.create({
    baseUrl: 'http://localhost:4242'
});

export default apiBack;