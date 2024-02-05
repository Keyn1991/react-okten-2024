import React from 'react';

import styles from './LaunchComponent.module.css';

const Launch = ({ launch }) => {
    const {
        mission_name,
        launch_year,
        links: { mission_patch_small }
    } = launch;

    return (
        <div className={styles.launch}>
            <h1>SpaceX Launches</h1>
            <h2>{mission_name}</h2>
            <p>launch_year: {launch_year}</p>
            <img src={mission_patch_small} alt="Mission Patch"/>
        </div>
    );
};

export {Launch};
