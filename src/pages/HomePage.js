import React from 'react';
import {Link, Outlet} from 'react-router-dom';

import styles from './HomePage.module.css';

const HomePage = () => {
    return (
        <div>
        <Outlet/>
            <nav className={styles.navMenu}>
                <ul>
                    <li>
                        <Link to="/todos" className={styles.navLink}>Todos</Link>
                    </li>
                    <li>
                        <Link to="/albums" className={styles.navLink}>Albums</Link>
                    </li>
                    <li>
                        <Link to="/comments" className={styles.navLink}>Comments</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export {HomePage};
