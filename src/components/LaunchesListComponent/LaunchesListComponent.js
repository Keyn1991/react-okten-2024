import React, { useEffect, useState } from 'react';
import { getAllLaunches } from '../../services/axiosService';
import styles from './LaunchesListComponent.module.css';
import {Launch} from "../LaunchComponent/LaunchComponent";



const LaunchesListComponent = () => {
    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        getAllLaunches().then(({ data }) => setLaunches(data));
    }, []);

    return (
        <div className={styles.container}>
            <ul>
                {launches.map((launch) => (
                    <Launch key={launch.mission_name} launch={launch} />
                ))}
            </ul>
        </div>
    );
};

export { LaunchesListComponent };
