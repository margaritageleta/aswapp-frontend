import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
    headers: {
        'Authorization': 'Api-Key ssuIkXyp.yDPz6hc1NqxHnTj53GQKY6soxP2ZRQiN',
    }
});

export default axiosClient;