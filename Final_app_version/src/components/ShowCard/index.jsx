import React from 'react';

export default function ShowCard ({ show }) {
    return (
        <div className="show-card">
            <div>
                <img src={show.image.url}></img>
            </div>
            <div>
                {/* {show.rating.average ? <span> ({ show.rating.average }/10)</span> : ""} */}
                <h2>{show.name}</h2>
                <em>{show.work.occupation}</em>
                {/* <div dangerouslySetInnerHTML={{ __html: show.summary }}></div> */}
            </div>
        </div>
    )
};
