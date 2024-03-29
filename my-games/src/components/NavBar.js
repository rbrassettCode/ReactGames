import React from "react";
import { Link } from 'react-router-dom';

const NavBar = ({isLoggedIn, onLogout}) => {
    const handleLogoutClick = (e) => {
        e.preventDefault();
        onLogout();
    }

    return (
        <nav>
            <Link to='/'>Home</Link>
            {!isLoggedIn && <Link to='/login'>Login</Link>}
            {!isLoggedIn && <Link to='/register'>Register</Link>}
            {isLoggedIn && <a href="/logout" onClick={handleLogoutClick}>Logout</a>}
        </nav>
    )
};

export default NavBar;