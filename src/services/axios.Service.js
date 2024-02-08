import axios from 'axios';
import { jsonBaseUrl, urls } from '../constants/urls';

const createUser = async (userData) => {
        const response = await axios.post(`${jsonBaseUrl}${urls.users}`, userData);
        return response.data;
};

const fetchUsers = async () => {
        const response = await axios.get(`${jsonBaseUrl}${urls.users}`);
        return response.data;
};


export { createUser, fetchUsers };
