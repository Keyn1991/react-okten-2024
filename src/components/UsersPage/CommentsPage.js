import React, { useEffect, useState } from 'react';

import {createComments, fetchComments} from "../../services/axios.Service";
import {FormComponents} from "../FormComponents/FormComponents";
import {CommentsComponent} from "../Comments/CommentsComponent";


function CommentsPage() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function loadUsers() {
                const fetchedUsers = await fetchComments();
                setUsers(fetchedUsers);
        }
        loadUsers();
    }, []);

    const handleUserSubmitSuccess = async (userData) => {

            const newUser = await createComments(userData);
            setUsers(prevUsers => [...prevUsers, newUser]);
    };

    return (
        <div>
            <FormComponents onSubmitSuccess={handleUserSubmitSuccess} />
            <CommentsComponent users={users} />
        </div>
    );
}

export {CommentsPage};
