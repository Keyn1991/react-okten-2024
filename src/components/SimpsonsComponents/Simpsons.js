import React from 'react';

import './Simpsons.css';

const Simpsons = ({name, image, description}) => {
    return (
        <div className="simpsons-container">
            <h1>{name}</h1>
            <img src={image} alt={name}/>
            <p>{description}</p>
        </div>
    );
};

export {Simpsons};
