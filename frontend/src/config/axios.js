import axios from 'axios';

axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

const axiosClient = axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
    crossdomain: true,
    headers: {
        'accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'Api-Key ssuIkXyp.yDPz6hc1NqxHnTj53GQKY6soxP2ZRQiN',
        
    }
});

export default axiosClient;
export const idClient = 3;

/*
componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/items/')
        .then(response => {
        if (response.status >= 400) {
        console.log('ERROR');
        return this.setState(() => {
            return { message: 'ERROR' };
        });
        } else {
        this.setState({ items : response.data });
        console.log(this.state.items);
        }
    })
}
*/