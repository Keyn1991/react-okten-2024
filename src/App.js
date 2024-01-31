import React from 'react';
import {Simpsons} from "./components/SimpsonsComponents/Simpsons";

import {RickandMortyData, SimpsonsData} from "./service/service";
import {RickandMorty} from "./components/RickandMortyComponets/RickandMorty";

const App = () => {

    return (
        <div>
            <h1>Simpsons</h1>

            <div className="app-container">
                {SimpsonsData.map((character, index) => (
                    <Simpsons key={index} Name={character.Name} image={character.image}
                              Description={character.Description}/>
                ))}

            </div>
            <h1>RickandMorty</h1>
            <div className="app-container">
                {
                    RickandMortyData.map((character, index) => (
                        <RickandMorty key={index} Name={character.Name} image={character.image}
                                      status={character.status} species={character.species} gender={character.gender}/>
                    ))}
            </div>
        </div>
    );
};

export {App};
