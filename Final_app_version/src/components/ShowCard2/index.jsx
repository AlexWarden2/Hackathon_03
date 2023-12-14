import React from 'react';

export default function ShowCard ({ show }) {
    return (
        <>
        <div className="show-card" class="hide-item" id='hiddenCard'>
            <div>
                <img src={show.image.url}></img>
            </div>
            <div>
                <h2>{show.name}</h2>
                <em>{show.work.occupation}</em>

            {show.powerstats 
            ? <span> 
                <table>
                    <tr>
                        <th>Powerstats</th>
                        <th>Rating</th>
                        <th>Selector</th>
                    </tr>
                    <tr>
                        <th>Intelligence</th>
                        <th>{show.powerstats.intelligence}</th>
                        <th><button id='selector1'>Select</button></th>
                    </tr>
                    <tr>
                        <th>Strength</th>
                        <th>{show.powerstats.strength}</th>
                        <th><button id='selector2'>Select</button></th>
                    </tr>
                    <tr>
                        <th>Speed</th>
                        <th>{show.powerstats.speed}</th>
                        <th><button id='selector3'>Select</button></th>
                    </tr>
                    <tr>
                        <th>Durability</th>
                        <th>{show.powerstats.durability}</th>
                        <th><button id='selector4'>Select</button></th>
                    </tr>
                    <tr>
                        <th>Power</th>
                        <th>{show.powerstats.power}</th>
                        <th><button id='selector5'>Select</button></th>
                    </tr>
                    <tr>
                        <th>Combat</th>
                        <th>{show.powerstats.combat}</th>
                        <th><button id='selector6'>Select</button></th>
                    </tr>
                </table>
            </span> 
            : ""}
            </div>
        </div>
        </>
    )
};
