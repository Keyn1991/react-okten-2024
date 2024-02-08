import React, { useEffect, useState } from 'react';

import {createUser, fetchUsers} from "../../services/axios.Service";
import {FormComponents} from "../FormComponents/FormComponents";
import {UsersComponent} from "../Users/UsersComponent";


function UsersPage() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function loadUsers() {
                const fetchedUsers = await fetchUsers();
                setUsers(fetchedUsers);
        }
        loadUsers();
    }, []);

    const handleUserSubmitSuccess = async (userData) => {

            const newUser = await createUser(userData);
            setUsers(prevUsers => [...prevUsers, newUser]);
    };

    return (
        <div>
            <FormComponents onSubmitSuccess={handleUserSubmitSuccess} />
            <UsersComponent users={users} />
        </div>
    );
}

export {UsersPage};
