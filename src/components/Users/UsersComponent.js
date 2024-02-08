import React from 'react';
import {UserComponent} from "../User/UserComponent";


const UsersComponent = ({ users }) => {

    return (
    <div>
        {users.map(user => <UserComponent key={user.id} user={user} />)}
    </div>
);
}
export  {UsersComponent};

