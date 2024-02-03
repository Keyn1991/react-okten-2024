import React from 'react';
import {Simpsons} from "./components/SimpsonsComponents/Simpsons";

import {rickandMortyData, simpsonsData} from "./service/data";
import {RickandMorty} from "./components/RickandMortyComponets/RickandMorty";

const App = () => {

    return (
        <div>
            <h1>Simpsons</h1>

            <div className="app-container">
                {simpsonsData.map((character, index) => (
                    <Simpsons key={index} name={character.name} image={character.image}
                              description={character.description}/>
                ))}

            </div>
            <h1>RickandMorty</h1>
            <div className="app-container">
                {
                    rickandMortyData.map((character, index) => (
                        <RickandMorty key={index} name={character.name} image={character.image}
                                      status={character.status} species={character.species} gender={character.gender}/>
                    ))}
            </div>
        </div>
    );
};

export {App};
