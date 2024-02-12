import React, { useEffect, useState } from 'react';

import { fetchComments, fetchPostById } from '../../services/commentsService';
import styles from './Comments.module.css';
const Comments = () => {
    const [comments, setComments] = useState([]);
    const [openedPostId, setOpenedPostId] = useState(null);
    const [openedPost, setOpenedPost] = useState(null);

    useEffect(() => {
        fetchComments()
            .then(response => setComments(response.data))
            .catch(error => console.log(error));
    }, []);

    const handleCommentClick = (postId) => {
        if (openedPostId === postId) {
            setOpenedPostId(null);
            setOpenedPost(null);
            return;
        }

        fetchPostById(postId)
            .then(response => {
                setOpenedPostId(postId);
                setOpenedPost(response.data);
            })
            .catch(error => console.log(error));
    };

    return (
        <div className={styles.commentsContainer}>
            <h1>Comments</h1>
            <ul>
                {comments.map(comment => (
                    <li key={comment.id} className={styles.commentItem}>
                        <p className={styles.commentBody}>
                            <strong>{comment.name}:</strong> {comment.body}
                        </p>
                        <button
                            onClick={() => handleCommentClick(comment.postId)}
                            className={styles.showPostButton}
                        >
                            {openedPostId === comment.postId ? 'Hide Post' : 'Show Post'}
                        </button>
                        {openedPostId === comment.postId && openedPost && (
                            <div className={styles.postDetails}>
                                <h4 className={styles.postTitle}>Post Id: {openedPost.id}</h4>
                                <h4 className={styles.postTitle}>Post Title: {openedPost.title}</h4>
                                <p>{openedPost.body}</p>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export {Comments};
