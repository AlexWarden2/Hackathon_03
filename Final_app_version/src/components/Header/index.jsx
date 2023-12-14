import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
const styles = ({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none'});

export default function Header () {
    return (
        <main>
            <header>
                <nav>
                    <NavLink to="/" style={styles}>Home</NavLink>
                    <NavLink to="/heroes/1" style={styles}>Heroes</NavLink>
                    <NavLink to="/battle" style={styles}>Battle</NavLink>
                </nav>
            </header>
            <Outlet />
        </main>
    )
};
