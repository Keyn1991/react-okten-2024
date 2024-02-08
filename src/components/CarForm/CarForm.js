import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { createCar, updateCar } from '../../services/carsServices';
import styles from './CarForm.module.css';

const CarForm = ({ car, onSave }) => {
    const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm();

    useEffect(() => {
        if (car) {
            setValue('brand', car.brand);
            setValue('price', car.price);
            setValue('year', car.year);
        } else {
            reset();
        }
    }, [car, setValue, reset]);

    const onSubmit = async (data) => {
        if (car) {
            await updateCar(car.id, data);
        } else {
            await createCar(data);
        }
        onSave();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
            <div className={styles.formField}>
                <label>Brand:</label>
                <input className={styles.formInput} {...register('brand', {
                    required: 'Brand is required',
                    pattern: {
                        value: /^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/,
                        message: 'Brand must be 1-20 characters long'
                    }
                })} placeholder="Brand" />
                {errors.brand && <p className={styles.errorMessage}>{errors.brand.message}</p>}
            </div>
            <div className={styles.formField}>
                <label>Price:</label>
                <input className={styles.formInput}  {...register('price', {
                    required: 'Price is required',
                    min: { value: 0, message: 'Price must be at least 0' },
                    max: { value: 1_000_000, message: 'Price must be under 1,000,000' }
                })} placeholder="Price" />
                {errors.price && <p className={styles.errorMessage}>{errors.price.message}</p>}
            </div>
            <div className={styles.formField}>
                <label>Year:</label>
                <input className={styles.formInput}  {...register('year', {
                    required: 'Year is required',
                    min: { value: 1990, message: 'Year must be after 1990' },
                    max: { value: new Date().getFullYear(), message: `Year must be before or in ${new Date().getFullYear()}` }
                })} placeholder="Year" />
                {errors.year && <p className={styles.errorMessage}>{errors.year.message}</p>}
            </div>
            <button className={styles.formButton} type="submit">Save
            </button>
        </form>
    );
};

export {CarForm};
