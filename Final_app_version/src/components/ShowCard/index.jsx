import React from 'react';

export default function ShowCard ({ show }) {
    return (
        <div className="show-card">
            <div>
                <img src={show.image.url}></img>
            </div>
            <div>
                <h2>{show.name}</h2>
                <em>{show.work.occupation}</em>
                <p>Height: {show.appearance.height}, Weight: {show.appearance.weight}</p>
            </div>
                <footer>Publisher: {show.biography.publisher}</footer>
        </div>
    )
};
