import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
const styles = ({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none'});

export default function Header () {
    return (
        <main>
            <header>
                <nav>
                    <NavLink to="/" style={styles}>Home</NavLink>
                    <NavLink to="/shows" style={styles}>Shows</NavLink>
                    <NavLink to="/battle" style={styles}>Battle</NavLink>
                </nav>
            </header>
            <Outlet />
        </main>
    )
};
