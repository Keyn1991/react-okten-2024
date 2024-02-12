
import { axiosService } from './axios.Service';

const fetchTodos = () => {
    return axiosService.get('/todos');
};

export {fetchTodos};
