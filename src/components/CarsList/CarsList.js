import React, { useEffect, useState } from 'react';

import { fetchCars, deleteCar } from '../../services/carsServices';
import { CarForm } from '../CarForm/CarForm';
import { CarComponent } from '../CarComponent/CarComponent';

const CarsList = () => {
    const [cars, setCars] = useState([]);
    const [editingCar, setEditingCar] = useState(null);

    useEffect(() => {
        loadCars();
    }, []);

    const loadCars = async () => {
        const fetchedCars = await fetchCars();
        console.log(fetchedCars);
        setCars(fetchedCars.data);
    };

    const handleDelete = async (carId) => {
        await deleteCar(carId);
        loadCars();
    };

    const handleEdit = (car) => {
        setEditingCar(car);
    };

    const handleSave = async () => {
        await loadCars();
        setEditingCar(null);
    };

    return (
        <div>
            <CarForm car={editingCar} onSave={handleSave} />
            {cars.map(car => (
                <CarComponent
                    key={car.id}
                    car={car}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />
            ))}
        </div>
    );
};

export { CarsList };
