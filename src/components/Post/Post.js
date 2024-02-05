import React from 'react';

import styles from './Post.module.css';
const Post = ({ post, isSelected, onSelect }) => {

    return (
        <div className={styles.post}>
            <div>ID: {post.id}</div>
            <div>Title: {post.title}</div>
            <button className={styles.post_button} onClick={onSelect}>
                {isSelected ? 'Hide Details' : 'Show Details'}
            </button>
            {isSelected && (
                <div>
                    <h2><b>
                        userId: {post.id}
                    </b>
                    </h2>
                    <p>
                        <b>
                            Body: {post.body}
                        </b>
                    </p>
                </div>
            )}
        </div>
    );
};

export {Post };
