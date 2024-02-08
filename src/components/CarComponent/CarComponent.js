import React from 'react';
import styles from './CarComponent.module.css';

const CarComponent = ({ car, onEdit, onDelete }) => {
    return (
        <div className={styles.container}>
            <div className={styles.detail}>Id: {car.id}</div>
            <div className={styles.detail}>Brand: {car.brand}</div>
            <div className={styles.detail}>Price: {car.price}</div>
            <div className={styles.detail}>Year: {car.year}</div>
            <div className={styles.actions}>
                <button className={`${styles.button} ${styles.edit}`} onClick={() => onEdit(car)}>Edit</button>
                <button className={`${styles.button} ${styles.delete}`} onClick={() => onDelete(car.id)}>Delete</button>
            </div>
        </div>
    );
};

export { CarComponent };
