import {baseUrl} from "../constants/urls";
import {axiosService} from "./axios.Service";


const fetchCars = async () => {
    return await axiosService.get(`${baseUrl}/cars`);
};

const createCar = async (carData) => {
    return await axiosService.post(`${baseUrl}/cars`, carData);
};

const updateCar = async (carId, carData) => {
    return await axiosService.put(`${baseUrl}/cars/${carId}`, carData);
};

const deleteCar = async (carId) => {
    return await axiosService.delete(`${baseUrl}/cars/${carId}`);
};

export { fetchCars, createCar, updateCar, deleteCar };