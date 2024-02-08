import React from 'react';
import {CommentComponent} from "../Comment/CommentComponent";


const CommentsComponent = ({ users }) => {

    return (
    <div>
        {users.map(user => <CommentComponent key={user.id} user={user} />)}
    </div>
);
}
export  {CommentsComponent};

