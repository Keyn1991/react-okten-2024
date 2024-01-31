import React from 'react';

import './Simpsons.css';

const Simpsons = ({Name, image, Description}) => {
    return (
        <div className="simpsons-container">
            <h1>{Name}</h1>
            <img src={image} alt={Name}/>
            <p>{Description}</p>
        </div>
    );
};

export {Simpsons};
