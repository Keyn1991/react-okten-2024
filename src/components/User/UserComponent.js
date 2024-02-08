import React from 'react';

const UserComponent = ({ user }) => (
    <div>
        <h3>{user.name}</h3>
        <p>{user.username}</p>
        <p>{user.email}</p>
    </div>
);

export {UserComponent};
