import React, { useEffect, useState } from 'react';

import {fetchTodos} from '../../services/todosService';
import styles from './Todos.module.css';
const Todos = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetchTodos()
            .then(response => setTodos(response.data))
    }, []);

    return (
        <div className={styles.todosContainer}>
            <h1 className={styles.todosTitle}>Todos</h1>
            <ul className={styles.todoList}>
                {todos.map(todo => (
                    <li key={todo.id} className={styles.todoItem}>
                        {todo.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};
export {Todos}