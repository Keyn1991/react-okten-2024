import { axiosService } from './axios.Service';

const fetchAlbums = () => {
    return axiosService.get('/albums');
};

export {fetchAlbums};
