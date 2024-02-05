import axios from 'axios';
import { baseURL } from "../constants/urls";

const axiosService = axios.create({
    baseURL
});

const getAll = () => {
    return axiosService.get('/');
};

export { axiosService, getAll };
