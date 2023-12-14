import React from 'react';
import { Link } from 'react-router-dom';

const linkStyle = {
    color: '#1746A2'
};

export default function HomePage() {
    return (
        <>
            <h1>Top Trumps App</h1>
            <em>Play your favourite heroes against eachother!</em>
            <li><Link to="/shows" style={linkStyle}>Explore heroes</Link></li>
            <li><Link to="/shows/1" style={linkStyle}>Play Game</Link></li>
        </>
    )
};
