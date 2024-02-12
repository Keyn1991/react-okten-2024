import React, { useEffect, useState } from 'react';
import { fetchAlbums } from '../../services/albumsService';
import styles from './Albums.module.css';

const Albums = () => {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        fetchAlbums()
            .then(response => setAlbums(response.data))
    }, []);

    return (
        <div className={styles.albumsContainer}>
            <h1 className={styles.albumsTitle}>Albums</h1>
            <ul className={styles.albumList}>
                {albums.map(album => (
                    <li key={album.id} className={styles.albumItem}>
                        {album.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export { Albums };
