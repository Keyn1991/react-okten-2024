import React from 'react';
import { useForm } from 'react-hook-form';

import { createUser } from '../../services/axios.Service';

function FormComponents({ onSubmitSuccess }) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
            const newUser = await createUser(data);
            onSubmitSuccess(newUser);
            reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Name:</label>
                <input {...register('name', { required: true })} />
                {errors.name && <p>Name is required</p>}
            </div>
            <div>
                <label>Username:</label>
                <input {...register('username', { required: true })} />
                {errors.username && <p>Username is required</p>}
            </div>
            <div>
                <label>Email:</label>
                <input type="email" {...register('email', { required: true })} />
                {errors.email && <p>Email is required</p>}
            </div>
            <button type="submit">Create User</button>
        </form>
    );
}

export { FormComponents };
