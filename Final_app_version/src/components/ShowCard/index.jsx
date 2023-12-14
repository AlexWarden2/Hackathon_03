import React from 'react';

export default function ShowCard ({ show }) {
    return (
        <>
        <div className="show-card">
            <div>
                <img src={show.image.url}></img>
            </div>
            <div>
                <h2>{show.name}</h2>
                <em>{show.work.occupation}</em>
                {/* <p>Height: {show.appearance.height}, Weight: {show.appearance.weight}</p>
                <div> <p>Publisher: {show.biography.publisher}</p>
            </div> */}

            {show.powerstats 
            ? <span> 
                <table>
                    <tr>
                        <th>Powerstats</th>
                        <th>Rating</th>
                    </tr>
                    <tr>
                        <th>Intelligence</th>
                        <th>{show.powerstats.intelligence}</th>
                    </tr>
                    <tr>
                        <th>Strength</th>
                        <th>{show.powerstats.strength}</th>
                    </tr>
                    <tr>
                        <th>Speed</th>
                        <th>{show.powerstats.speed}</th>
                    </tr>
                    <tr>
                        <th>Durability</th>
                        <th>{show.powerstats.durability}</th>
                    </tr>
                    <tr>
                        <th>Power</th>
                        <th>{show.powerstats.power}</th>
                    </tr>
                    <tr>
                        <th>Combat</th>
                        <th>{show.powerstats.combat}</th>
                    </tr>
                </table>
            </span> 
            : ""}
            </div>
        </div>
        </>
    )
};
