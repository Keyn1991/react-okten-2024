import React from 'react';
import { useForm } from 'react-hook-form';

import {createComments} from '../../services/axios.Service';

function FormComponents({ onSubmitSuccess }) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
            const newUser = await createComments(data);
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
                <label>body:</label>
                <input {...register('body', { required: true })} />
                {errors.body && <p>Username is required</p>}
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
