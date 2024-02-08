import React from 'react';

const CommentComponent = ({ user }) => (
    <div>
        <h3>{user.name}</h3>
        <p>{user.body}</p>
        <p>{user.email}</p>
    </div>
);

export {CommentComponent};
