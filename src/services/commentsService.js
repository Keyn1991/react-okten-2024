import { axiosService } from './axios.Service';

const fetchComments = () => {
    return axiosService.get('/comments');
};

const fetchPostById = (postId) => {
    return axiosService.get(`/posts/${postId}`);
};

export { fetchComments, fetchPostById };
