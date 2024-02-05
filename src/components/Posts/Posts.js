import React, { useEffect, useState } from 'react';

import { getAll } from "../../services/axiosService";
import { Post } from "../Post/Post";
import styles from './Posts.module.css';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [selectedPostId, setSelectedPostId] = useState(null);

    useEffect(() => {
        getAll().then(({data}) => setPosts(data));
    }, []);

    const handlePostSelect = (id) => {
        setSelectedPostId(selectedPostId === id ? null : id);
    };

    return (
        <div className={styles.container}>
            {posts.map(post => (
                <div key={post.id} className={styles.post}>
                    <Post
                        key={post.id}
                        post={post}
                        isSelected={selectedPostId === post.id}
                        onSelect={() => handlePostSelect(post.id)}
                    />
                </div>
            ))}
        </div>
    );
};

export {Posts};
