import axios from 'axios';
import { jsonBaseUrl, urls } from '../constants/urls';

const createComments = async (userData) => {
        const response = await axios.post(`${jsonBaseUrl}${urls.comments}`, userData);
        return response.data;
};

const fetchComments = async () => {
        const response = await axios.get(`${jsonBaseUrl}${urls.comments}`);
        return response.data;
};


export { createComments, fetchComments };
