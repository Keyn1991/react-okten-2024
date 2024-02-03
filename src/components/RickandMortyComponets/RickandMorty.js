import React from 'react';

import './RickandMorty.css';

const RickandMorty = ({name, image, status, species, gender}) => {
    return (
        <div className="rickandmorty-container">
            <img src={image} alt={name}/>
            <div className="rickandmorty-text">
                <h1>{name}</h1>
                <h3>{status}</h3>
                <h3>{species}</h3>
                <h3>{gender}</h3>
            </div>
        </div>
    );
};

export {RickandMorty};
