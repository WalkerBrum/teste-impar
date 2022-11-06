import Axios from 'axios';

const axios = Axios.create({
    baseURL: '/api'
});

export const apiNext = () => {
    listNames: () => {
        return axios.get('/')
    }
}